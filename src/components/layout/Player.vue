<template>
  <div class="player container-fluid fixed-bottom">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center flex-grow-1 justify-content-center">
        <font-awesome-icon :icon="['fas', 'fa-backward']" class="prev-btn player-btn p-3"></font-awesome-icon>
        <font-awesome-icon :icon="['fas', 'fa-play']" class="play-btn p-3"></font-awesome-icon>
        <font-awesome-icon :icon="['fas', 'fa-forward']" class="next-btn player-btn p-3"></font-awesome-icon>

        <audio id="audio" src="http://62.60.230.20:8000/v1/govno_music/stream/c7fef3a3-f31e-4279-9467-fe6a55859f07/"></audio>
      </div>

      <div class="position-absolute end-0 pe-3">
        <input
            id="volume-slider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value="1"
        >
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
</style>
<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>