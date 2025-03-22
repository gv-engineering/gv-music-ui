<script setup>
import VolumeSlider from "@/components/common/VolumeSlider.vue";
import PlayerTrackInfo from "../common/PlayerTrackInfo.vue";
import { usePlayerStore } from "@/stores/PlayerStore";
import { useIsDesktop } from "@/composables/useIsDesktop";
import { storeToRefs } from "pinia";
import { watch, nextTick } from "vue";
import PlayerTrackProgress from "../common/PlayerTrackProgress.vue";


const { isDesktop } = useIsDesktop();

const playerStore = usePlayerStore();
const { currentTrack, isPlaying, audioRef } = storeToRefs(playerStore);
const { updatePlayTime, playTrack, pauseTrack } = playerStore;

// Включение или выключение проигрывания трека
const togglePlaying = () => {
  if (isPlaying.value) {
    pauseTrack();
  } else {
    playTrack();
  }
};

// Снимает значение текущего времени воспроизведения с реактива <audio>
const onTimeUpdate = () => {
  updatePlayTime(audioRef.value.currentTime);
};

// Автовоспроизведение при выборе трека
watch(currentTrack, () => {
  nextTick(() => {
    if (audioRef.value) {
      playTrack();
    }
  });
});


</script>

<template>
  <div class="player container-fluid fixed-bottom p-0">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center flex-grow-1 justify-content-center">
        <PlayerTrackInfo/>
        <font-awesome-icon
            :icon="['fas', 'fa-backward']"
            class="prev-btn player-btn p-3"
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
            @timeupdate="onTimeUpdate"
        />
      </div>

      <VolumeSlider v-if="isDesktop"></VolumeSlider>

    </div>
    <div>
      <PlayerTrackProgress/>
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
</style>
