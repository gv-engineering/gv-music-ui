<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import PlugImg from "@/assets/images/plug.png";
import LikeBtn from "@/components/common/LikeBtn.vue";
import Player from "@/components/layout/Player.vue";

const apiUrl = import.meta.env.VITE_API_URL;
const tracks = ref([]);
const selectedTrack = ref(null);

const fetchTracks = async () => {
  try {
    const response = await axios.get(apiUrl + "/list");
    tracks.value = response.data.tracks;
  } catch (error) {
    console.error('Ошибка при загрузки треков:', error);
  }
};

onMounted(() => {
  fetchTracks();
})
</script>

<template>
  <div class="list-tracks">
    <div v-for="track in tracks" :key="track.id" @click="selectedTrack = track" class="list-tracks-item d-flex align-items-center px-2 rounded mt-1">
      <img class="list-photo rounded shadow" :src="PlugImg" alt="PlugImg">
      <div class="track-info">
        <h4 class="list-h m-2">{{ track.name }}</h4>
        <p class="author list-h m-2">{{ track.author }}</p>
      </div>
      <div class="ms-auto d-flex align-items-center">
        <p class="author list-h m-2 ">{{ track.time }}</p>
        <LikeBtn></LikeBtn>
      </div>
    </div>

    <Player :track="selectedTrack" />
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