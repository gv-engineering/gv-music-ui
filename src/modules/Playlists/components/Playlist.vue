<script setup>
import { onMounted } from "vue";
import { usePlayerStore } from '@/modules/Player/store/PlayerStore.js';
import PlaylistItem from "@/components/PlaylistItem.vue";
import {usePlaylistStore} from "@/modules/Playlists/store/PlaylistStore.js";
import {storeToRefs} from "pinia";


const playlistStore = usePlaylistStore();
const {
  currentPlaylistTracks,
  loading,
  error
} = storeToRefs(playlistStore);

// Hook after DOM for fetch track list
onMounted(() => {
  playlistStore.fetchCurrentTracks();
})

const PlayerStore = usePlayerStore();

// Upload selected track & list to store
const selectTrack = (track) => {
  PlayerStore.uploadTrack(track);
};
</script>

<template>
  <div v-if="loading">Тут будет нормальная обработка загрузки</div>
  <div v-if="error">{{ error.message }}</div>

  <PlaylistItem
      v-for="track in currentPlaylistTracks"

      :key="track.id"
      :track="track"
      @click="selectTrack(track, tracks)"
  />
</template>