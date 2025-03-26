<script setup>
import repeatListSvg from '@/assets/images/repeat.svg?raw'
import repeatOneSvg from '@/assets/images/repeatOne.svg?raw'
import shuffleSvg from '@/assets/images/shuffle.svg?raw'
import {usePlayerStore} from "@/stores/PlayerStore.js";
import {storeToRefs} from "pinia";
import {computed} from "vue";


const playerStore = usePlayerStore();
const { isPlaying, repeatStatus, shuffleStatus } = storeToRefs(playerStore);
const {
  playPrevTrack,
  playTrack,
  playNextTrack,
  pauseTrack,
  toggleRepeat,
  toggleShuffle
} = playerStore;

// Включение или выключение проигрывания трека
const togglePlaying = () => {
  if (isPlaying.value) {
    pauseTrack();
  } else {
    playTrack();
  }
};

const isRepeatActive = computed(() => repeatStatus.value !== 'none')

const currentRepeatSvg = computed(() => {
  return repeatStatus.value === 'track' ? repeatOneSvg : repeatListSvg;
})
</script>

<template>
  <div
      @click="toggleShuffle"
      v-html="shuffleSvg"
      :class="{ 'player-btn-active': shuffleStatus }"
      class="player-shuffle-svg p-3"
  ></div>
  <font-awesome-icon
      :icon="['fas', 'fa-backward']"
      class="prev-btn player-btn p-3"
      @click="playPrevTrack"
  />
  <font-awesome-icon
      :icon="['fas', isPlaying ? 'fa-pause' : 'fa-play']"
      class="play-btn p-3"
      @click="togglePlaying"
  />
  <font-awesome-icon
      :icon="['fas', 'fa-forward']"
      class="next-btn player-btn p-3"
      @click="playNextTrack"
  />
  <div
      @click="toggleRepeat"
      v-html="currentRepeatSvg"
      :class="{ 'player-btn-active': isRepeatActive }"
      class="player-repeat-svg p-3"
  ></div>
</template>

<style scoped>
.play-btn {
  font-size: 25px;
  color: #FF4081;
}

.player-btn {
  font-size: 20px;
  color: #FF4081;
}

.player-shuffle-svg {
  font-size: 24px;
}

.player-repeat-svg {
  font-size: 28px;
}

.player-repeat-svg,
.player-shuffle-svg {
  color: #941b43;
  display: flex;
  justify-content: center;
  align-items: center;
}

.player-repeat-svg svg {
  width: 20px;
  height: 20px;
}

.play-btn:hover,
.player-btn:hover,
.player-repeat-svg:hover,
.player-shuffle-svg:hover {
  transition: all ease 0.3s;
  background-color: #121212;
  border-radius: 50%;
  cursor: pointer;
}

.player-btn-active {
  transition: all ease 0.3s;
  color: #FF4081;
}
</style>