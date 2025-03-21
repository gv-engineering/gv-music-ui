<script setup>
import VolumeSlider from "@/components/common/VolumeSlider.vue";
import { useIsDesktop } from "@/composables/useIsDesktop";
import { usePlayerStore } from "@/stores/PlayerStore.js";
import { storeToRefs } from "pinia";
import { nextTick, ref, watch } from "vue";


const { isDesktop } = useIsDesktop();
const currentTrackStore = usePlayerStore();
const { currentTrack, isPlaying, volume } = storeToRefs(currentTrackStore);

const audioRef = ref(null);
const currentTime = ref(0);
const currentTimePerc = ref(0);

// Обновляет текущее время проигрывания трека
const updateCurrentTime = () => {
  if (audioRef.value && !isNaN(audioRef.value.duration)) {
    currentTime.value = audioRef.value.currentTime;
    currentTimePerc.value = Math.min((currentTime.value / audioRef.value.duration) * 100, 100);
  }
};

// Включает или выключает воспроизведение трека
const togglePlaying = () => {
  if (isPlaying.value) {
    currentTrackStore.pauseTrack();
    audioRef.value.pause();
  } else {
    currentTrackStore.playTrack();
    audioRef.value.play();
  }
};

// Кнопка назад
const toggleBackward = () => {
  if (audioRef.value) {
    console.log(audioRef.value.duration);
  }
}


// Автовоспроизведение при выборе трека
watch(currentTrack, () => {
  nextTick(() => {
    if (audioRef.value) {
      audioRef.value.play();
      currentTrackStore.playTrack();
    }
  });
});

// Прослушивание события изменения громкости из глобального хранилища
watch(volume, (newValue) => {
  if (audioRef.value && newValue >= 0 && newValue <= 1) {
    audioRef.value.volume = newValue;
  }
});

// Прослушивание изменения воспроизводимого трека и присваивание ему установленной громкости из глобального хранилища
watch(audioRef, (newValue) => {
  if (newValue && volume.value >= 0 && volume.value <= 1) {
    newValue.volume = volume.value;
  }
});

// Функционал изменения точки воспроизведения трека
const seekTrack = (event) => {
  if (audioRef.value && currentTrack.value) {
    const progressBar = event.currentTarget; // Элемент прогресс-бара
    const rect = progressBar.getBoundingClientRect(); // Позиция и размеры прогресс-бара
    const clickX = event.clientX - rect.left; // Позиция клика относительно начала прогресс-бара
    const width = rect.width; // Полная ширина прогресс-бара
    const seekTime = (clickX / width) * audioRef.value.duration; // Вычисляем новую позицию в секундах

    audioRef.value.currentTime = seekTime; // Устанавливаем новое время трека
    updateCurrentTime(); // Обновляем прогресс
  }
};
</script>

<template>
  <div class="player container-fluid fixed-bottom p-0">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center flex-grow-1 justify-content-center">
        <div v-if="currentTrack" class="position-absolute start-0 ps-3 d-flex align-items-center">
          <img
              class="list-photo rounded shadow"
              :src="currentTrack.cover_url" alt=""
          >
          <div class="track-info" v-if="isDesktop">
            <h4 class="list-h m-2">{{ currentTrack.title }}</h4>
            <p class="author list-h m-2">{{ currentTrack.artist }}</p>
          </div>
        </div>
        <font-awesome-icon
            :icon="['fas', 'fa-backward']"
            class="prev-btn player-btn p-3"
            @click="toggleBackward"
        />
        <font-awesome-icon
            :icon="['fas', isPlaying ? 'fa-pause' : 'fa-play']"
            class="play-btn p-3"
            @click="togglePlaying"
        />
        <font-awesome-icon
            :icon="['fas', 'fa-forward']"
            class="next-btn player-btn p-3"
        />
        <audio
            ref="audioRef"
            v-if="currentTrack"
            :src="currentTrack.url"
            @timeupdate="updateCurrentTime"
        />
      </div>

      <VolumeSlider v-if="isDesktop"></VolumeSlider>

    </div>
    <div class="">
      <div 
        class="progress rounded-0"
        role="progressbar" 
        :aria-valuenow="currentTimePerc" 
        aria-valuemin="0" 
        aria-valuemax="100"
        @click="seekTrack"
      >
        <div class="progress-bar" :style="{ width: currentTimePerc + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.player {
  background-color: #1E1E1E;
}

.play-btn {
  font-size: 25px;
  color: #FF4081;
}

.player-btn {
  color: #FF4081;
}

.play-btn:hover, .player-btn:hover {
  transition: all ease 0.3s;
  color: #db2763;
  background-color: #121212;
  border-radius: 50%;
  cursor: pointer;
}

.author {
  color: #A0A0A0;
}

.progress {
  background-color: #121212;
  cursor: pointer;
}
.progress-bar {
  transition: width 0.5s linear; /* Плавное изменение ширины за 0.1 секунды */
  background-color: #FF4081;

}
</style>
