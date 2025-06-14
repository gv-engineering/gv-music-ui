<script setup>
import noteSvg from "@/shared/images/note.svg";
import {isDesktop} from "@/shared/helpers/useIsDesktop.js";

defineProps({
  currentTrack: {
    type: [Object]
  }
})
</script>

<template>
  <div v-if="currentTrack" class="position-absolute start-0 p-1 d-flex align-items-center">
    <img class="cover rounded shadow" :src="currentTrack.cover_url || noteSvg" alt="track cover">
    <div class="track-info" v-if="isDesktop">
      <h4 class="color-E0 m-2">{{ currentTrack.title || 'Unknown title' }}</h4>
      <p class="color-A0 color-E0 m-2">{{ currentTrack.artist || 'Unknown artist' }}</p>
    </div>
  </div>
</template>

<style scoped>
.cover {
  width: 50px;
  height: 50px;
}
</style>