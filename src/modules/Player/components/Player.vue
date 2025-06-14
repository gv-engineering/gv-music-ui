<script setup>
import PlayerVolumeSlider from "@/modules/Player/components/PlayerVolumeSlider.vue";
import { usePlayerStore } from "@/modules/Player/store/PlayerStore.js";
import { useStoreAPI } from "@/shared/store/store-api.js";
import { isDesktop } from "@/shared/helpers/useIsDesktop.js";
import { storeToRefs } from "pinia";
import {watch, nextTick, onMounted} from "vue";
import PlayerTrackProgress from "./PlayerTrackProgress.vue";
import PlayerControls from "@/components/PlayerControls.vue";
import PlayerTrackInfo from "@/components/PlayerTrackInfo.vue";


const { loadPlaylistToPlayer } = useStoreAPI();

const playerStore = usePlayerStore();
const {
  currentTrack,
  isPlaying,
  audioRef,
  repeatStatus,
  shuffleStatus,
} = storeToRefs(playerStore);
const {
  playPrevTrack,
  playTrack,
  playNextTrack,
  pauseTrack,
  updatePlayTime,
  toggleRepeat,
  toggleShuffle,
} = playerStore;

// Turns track playback on or off
const togglePlaying = () => {
  if (isPlaying.value) {
    pauseTrack();
  } else {
    playTrack();
  }
};

// Gets the value of the current playback time with <audio> ref
const onTimeUpdate = () => {
  updatePlayTime(audioRef.value.currentTime);
};

// Auto playback when a track is selected
watch(currentTrack, () => {
  nextTick(() => {
    if (audioRef.value) {
      playTrack();
    }
  });
});

onMounted(() => {
  loadPlaylistToPlayer();
})
</script>

<template>
  <div class="bg-1E container-fluid fixed-bottom p-0">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center flex-grow-1 justify-content-center">
        <PlayerTrackInfo
            :current-track="currentTrack"
        />
        <player-controls
            :repeat-state="repeatStatus"
            :is-playing="isPlaying"
            :is-shuffle-active="shuffleStatus"
            @nextTrack="playNextTrack"
            @prevTrack="playPrevTrack"
            @toggleRepeat="toggleRepeat"
            @toggleShuffle="toggleShuffle"
            @togglePlaying="togglePlaying"
        />
        <audio
            ref="audioRef"
            v-if="currentTrack"
            :src="currentTrack.url"
            @timeupdate="onTimeUpdate"
        />
      </div>

      <PlayerVolumeSlider v-if="isDesktop"></PlayerVolumeSlider>

    </div>
    <div>
      <PlayerTrackProgress/>
    </div>
  </div>
</template>
