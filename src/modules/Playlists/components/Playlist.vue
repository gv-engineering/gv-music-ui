<script setup>
import { onMounted } from "vue";
import { usePlayerStore } from '@/modules/Player/store/PlayerStore.js';
import PlaylistItem from "@/components/PlaylistItem.vue";
import {usePlaylistStore} from "@/modules/Playlists/store/PlaylistStore.js";


const { currentPlaylistTracks, loading, error, fetchCurrentTracks } = usePlaylistStore();
// Hook after DOM for fetch track list
onMounted(() => {
  fetchCurrentTracks();
})

// CRINGE ALERT
const PlayerStore = usePlayerStore();

// Upload selected track & list to store
const selectTrack = (track, tracks) => {
  PlayerStore.uploadTrack(track, tracks);
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