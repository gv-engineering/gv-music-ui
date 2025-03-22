<script setup>
import { usePlayerStore } from "@/stores/PlayerStore";
import { storeToRefs } from "pinia";


const playerStore = usePlayerStore();
const { currentPlayTimePercents, audioRef, currentTrack } = storeToRefs(playerStore);

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
  transition: width 0.5s linear; /* Плавное изменение ширины за 0.1 секунды */
  background-color: #FF4081;
}
</style>