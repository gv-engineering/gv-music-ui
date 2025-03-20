<script setup>
import VolumeSlider from "@/components/common/VolumeSlider.vue";
import { useIsDesktop } from "@/composables/useIsDesktop";
import { useCurrentTrackStore } from "@/stores/CurrentTrackStore";
import {storeToRefs} from "pinia";


const { isDesktop } = useIsDesktop();
const currentTrackStore = useCurrentTrackStore();
const { currentTrack, isPlaying } = storeToRefs(currentTrackStore);
</script>

<template>
  <div class="player container-fluid fixed-bottom">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center flex-grow-1 justify-content-center">
        <font-awesome-icon :icon="['fas', 'fa-backward']" class="prev-btn player-btn p-3"></font-awesome-icon>
        <font-awesome-icon
            :icon="['fas', 'fa-play']"
            class="play-btn p-3"
        />
        <font-awesome-icon :icon="['fas', 'fa-forward']" class="next-btn player-btn p-3"></font-awesome-icon>

        <audio id="audio" v-if="currentTrack" :src="currentTrack.url" controls></audio>
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
</style>
