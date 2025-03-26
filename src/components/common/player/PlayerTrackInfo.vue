<script setup>
import { useIsDesktop } from "@/composables/useIsDesktop.js";
import { usePlayerStore } from "@/stores/PlayerStore.js";
import { storeToRefs } from "pinia";


const { isDesktop } = useIsDesktop();
const playerStore = usePlayerStore();
const { currentTrack } = storeToRefs(playerStore);

</script>

<template>
    <div v-if="currentTrack" class="position-absolute start-0 ps-3 d-flex align-items-center">
        <img
            class="photo rounded shadow"
            :src="currentTrack.cover_url" alt="TrackCover"
        >
        <div class="track-info" v-if="isDesktop">
            <h4 class="color-E0 m-2">{{ currentTrack.title }}</h4>
            <p class="color-A0 color-E0 m-2">{{ currentTrack.artist }}</p>
        </div>
    </div>
</template>

<style scoped>
.photo {
  width: 50px;
  height: 50px;
}
</style>