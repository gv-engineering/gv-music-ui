<script setup>
import VolumeSlider from "@/components/common/VolumeSlider.vue";
import { useIsDesktop } from "@/composables/useIsDesktop";
import { usePlayerStore } from "@/stores/PlayerStore.js";
import {storeToRefs} from "pinia";
import {nextTick, ref, watch} from "vue";


const { isDesktop } = useIsDesktop();
const currentTrackStore = usePlayerStore();
const { currentTrack, isPlaying, volume } = storeToRefs(currentTrackStore);

const audioRef = ref(null);

const togglePlaying = () => {
  if (isPlaying.value) {
    currentTrackStore.pauseTrack();
    audioRef.value.pause();
  } else {
    currentTrackStore.playTrack();
    audioRef.value.play();
  }
};

// Автовоспроизведение при выборе трека
watch(currentTrack, () => {
  nextTick(() => {
    if (audioRef.value) {
      audioRef.value.play();
      currentTrackStore.playTrack();
    }
  });
});

watch(volume, (newValue) => {
  if (audioRef.value && newValue >= 0 && newValue <= 1) {
    audioRef.value.volume = newValue;
  }
});

watch(audioRef, (newValue) => {
  if (newValue && volume.value >= 0 && volume.value <= 1) {
    newValue.volume = volume.value;
  }
});
</script>

<template>
  <div class="player container-fluid fixed-bottom">
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
        />
      </div>

      <VolumeSlider v-if="isDesktop"></VolumeSlider>

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
