<script setup>
import PlayerVolumeSlider from "@/modules/Player/components/PlayerVolumeSlider.vue";
import PlayerTrackInfo from "./PlayerTrackInfo.vue";
import { usePlayerStore } from "@/modules/Player/store/PlayerStore.js";
import { useIsDesktop } from "@/shared/helpers/useIsDesktop.js";
import { storeToRefs } from "pinia";
import { watch, nextTick } from "vue";
import PlayerTrackProgress from "./PlayerTrackProgress.vue";
import PlayerControlBtns from "@/modules/Player/components/PlayerControlBtns.vue";

// VueUse script to define mobile/desktop
const { isDesktop } = useIsDesktop();

const playerStore = usePlayerStore();
const { currentTrack, audioRef } = storeToRefs(playerStore);
const { updatePlayTime, playTrack } = playerStore;



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
</script>

<template>
  <div class="bg-1E container-fluid fixed-bottom p-0">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center flex-grow-1 justify-content-center">
        <PlayerTrackInfo/>
        <PlayerControlBtns/>
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
