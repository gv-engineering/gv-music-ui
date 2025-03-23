<script setup>
import { usePlayerStore } from "@/stores/PlayerStore.js";


const PlayerStore = usePlayerStore();
</script>

<template>
  <div class="position-absolute end-0 pe-3 d-flex align-items-center">
    <font-awesome-icon :icon="['fas', 'fa-volume-low']" class="volume-btn p-3"></font-awesome-icon>
    <input
        id="volume-slider"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value="1"
        @input="PlayerStore.setVolume($event.target.value)"
    >
  </div>
</template>

<style scoped>
.volume-btn {
  color: #FF4081;
}

#volume-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  background: #121212;
  border-radius: 15px;
  outline: none;
}

#volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #FF4081;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s ease;
}

#volume-slider::-moz-range-track {
  background: #121212;
  height: 10px;
  border-radius: 15px;
}

#volume-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #FF4081;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

#volume-slider::-moz-range-thumb:hover {
  background: #db2763;
  transform: scale(1.1);
}
</style>