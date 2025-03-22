<script setup>

import { usePlayerStore } from "@/stores/PlayerStore";
import { storeToRefs } from "pinia";



const { isDesktop } = useIsDesktop();

const playerStore = usePlayerStore();
const { currentTrack, isPlaying, volume, audioRef } = storeToRefs(playerStore);
const { uploadTrack, playTrack, pauseTrack, setVolume } = playerStore;
</script>

<template>
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
</template>

<style scoped>
.progress {
  background-color: #121212;
  cursor: pointer;
}
.progress-bar {
  transition: width 0.5s linear; /* Плавное изменение ширины за 0.1 секунды */
  background-color: #FF4081;
}
</style>