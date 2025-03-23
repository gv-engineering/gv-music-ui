<script setup>
import PlayerVolumeSlider from "@/components/common/player/PlayerVolumeSlider.vue";
import PlayerTrackInfo from "../common/player/PlayerTrackInfo.vue";
import { usePlayerStore } from "@/stores/PlayerStore";
import { useIsDesktop } from "@/composables/useIsDesktop";
import { storeToRefs } from "pinia";
import { watch, nextTick } from "vue";
import PlayerTrackProgress from "../common/player/PlayerTrackProgress.vue";
import repeatSvg from '@/assets/images/repeat.svg?raw'
import repeatOneSvg from '@/assets/images/repeatOne.svg?raw'
import shuffleSvg from '@/assets/images/shuffle.svg?raw'

const { isDesktop } = useIsDesktop();

const playerStore = usePlayerStore();
const { currentTrack, isPlaying, audioRef } = storeToRefs(playerStore);
const { updatePlayTime, playPrevTrack, playTrack, playNextTrack, pauseTrack } = playerStore;

// Включение или выключение проигрывания трека
const togglePlaying = () => {
  if (isPlaying.value) {
    pauseTrack();
  } else {
    playTrack();
  }
};

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
        <div v-html="shuffleSvg" class="player-shuffle-svg p-3"/>

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

        <div v-html="repeatOneSvg" class="player-repeat-svg p-3"/>
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

  color: #FF4081;
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
  color: #db2763;
  background-color: #121212;
  border-radius: 50%;
  cursor: pointer;
}
</style>
