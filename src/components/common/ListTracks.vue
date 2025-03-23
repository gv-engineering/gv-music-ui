<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import LikeBtn from "@/components/common/LikeBtn.vue";
import { usePlayerStore } from '@/stores/PlayerStore.js';

const apiUrl = import.meta.env.VITE_API_URL;
const tracks = ref([]);

const fetchTracks = async () => {
  try {
    const response = await axios.get(apiUrl + "/tracks");
    tracks.value = response.data.tracks;
  } catch (error) {
    console.error('Ошибка при загрузки треков:', error);
  }
};

onMounted(() => {
  fetchTracks();
})

const PlayerStore = usePlayerStore();

const selectTrack = (track, tracks) => {
  PlayerStore.uploadTrack(track, tracks);
};

</script>

<template>
  <div class="list-tracks">
    <div v-for="track in tracks" :key="track.id" @click="selectTrack(track, tracks)" class="list-tracks-item d-flex align-items-center px-2 rounded mt-1">
      <img class="list-photo rounded shadow" :src="track.cover_url" alt="">
      <div class="track-info">
        <h4 class="list-h m-2">{{ track.title }}</h4>
        <p class="author list-h m-2">{{ track.artist }}</p>
      </div>
      <div class="ms-auto d-flex align-items-center">
        <p class="author list-h m-2 ">{{ track.duration }}</p>
        <LikeBtn></LikeBtn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-tracks-item  {
  cursor: pointer;
}

.author {
  color: #A0A0A0;
}

.list-tracks-item:hover {
  background-color: #1E1E1E;
  transition: all ease 0.2s;
}
</style>