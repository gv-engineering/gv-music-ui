<script setup>
import { ref, watch } from "vue";
import VolumeSlider from "@/components/common/VolumeSlider.vue";
import { useIsDesktop } from "@/composables/useIsDesktop";


const props = defineProps( {
  track: {
    type: Object,
    default: null
  }
});



const { isDesktop } = useIsDesktop();
const apiUrl = import.meta.env.VITE_API_URL;

const streamUrl = ref("");

watch(() => props.track, () => {
  if (props.track) {
    streamUrl.value = apiUrl + "/stream/" + props.track.id;
  }
}, {immediate: true});




</script>

<template>
  <div class="player container-fluid fixed-bottom">
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center flex-grow-1 justify-content-center">
        <font-awesome-icon :icon="['fas', 'fa-backward']" class="prev-btn player-btn p-3"></font-awesome-icon>
        <font-awesome-icon :icon="['fas', 'fa-play']" class="play-btn p-3"></font-awesome-icon>
        <font-awesome-icon :icon="['fas', 'fa-forward']" class="next-btn player-btn p-3"></font-awesome-icon>

        <audio id="audio" :src="streamUrl" controls></audio>
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
