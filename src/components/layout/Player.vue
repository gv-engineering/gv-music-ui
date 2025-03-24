<script setup>
import PlayerVolumeSlider from "@/components/common/player/PlayerVolumeSlider.vue";
import PlayerTrackInfo from "../common/player/PlayerTrackInfo.vue";
import { usePlayerStore } from "@/stores/PlayerStore";
import { useIsDesktop } from "@/composables/useIsDesktop";
import { storeToRefs } from "pinia";
import { watch, nextTick } from "vue";
import PlayerTrackProgress from "../common/player/PlayerTrackProgress.vue";
import PlayerControlBtns from "@/components/common/player/PlayerControlBtns.vue";


const { isDesktop } = useIsDesktop();

const playerStore = usePlayerStore();
const { currentTrack, audioRef } = storeToRefs(playerStore);
const { updatePlayTime, playTrack } = playerStore;



// Снимает значение текущего времени воспроизведения с реактива <audio>
const onTimeUpdate = () => {
  updatePlayTime(audioRef.value.currentTime);
};

// Авто воспроизведение при выборе трека
watch(currentTrack, () => {
  nextTick(() => {
    if (audioRef.value) {
      playTrack();
    }
  });
});
</script>

<template>
  <div class="player container-fluid fixed-bottom p-0">
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

<style scoped>
.player {
  background-color: #1E1E1E;
}

</style>
