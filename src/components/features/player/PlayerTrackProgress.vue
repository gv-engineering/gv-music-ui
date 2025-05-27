<script setup>
import { usePlayerStore } from "@/stores/PlayerStore.js";
import { storeToRefs } from "pinia";


const playerStore = usePlayerStore();
const { currentPlayTimePercents, audioRef, currentTrack } = storeToRefs(playerStore);
const { updatePlayTime } = playerStore;

// Track switching relative to pressing the progress bar
const seekTrack = (event) => {
    if (audioRef.value && currentTrack.value) {
      const progressBar = event.currentTarget; // Progress bar element
      const rect = progressBar.getBoundingClientRect(); // Position and size of the progress bar
      const clickX = event.clientX - rect.left; // Click position relative to the beginning of the progress bar
      const width = rect.width; // Full width of the progress bar
      const seekTime = (clickX / width) * audioRef.value.duration; // Calculate the new position in seconds
  
      audioRef.value.currentTime = seekTime; // Set a new track time
      updatePlayTime(); // Updating progress
    }
  };
</script>

<template>
    <div 
        class="progress rounded-0"
        role="progressbar" 
        :aria-valuenow="currentPlayTimePercents" 
        aria-valuemin="0" 
        aria-valuemax="100"
        @click="seekTrack"
    >
        <div class="progress-bar" :style="{ width: currentPlayTimePercents + '%' }"></div>
    </div>
    
</template>

<style scoped>
.progress {
  background-color: #121212;
  cursor: pointer;
}
.progress-bar {
  transition: width 0.5s linear;
  background-color: #FF4081;
}
</style>