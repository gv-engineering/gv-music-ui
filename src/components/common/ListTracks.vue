<script setup>

import PlugImg from "@/assets/images/plug.png";
import LikeBtn from "@/components/common/LikeBtn.vue";
</script>

<template>
  <div class="list-tracks">
    <div class="list-tracks-item d-flex align-items-center px-2 rounded mt-1">
      <img class="list-photo rounded shadow" :src="PlugImg" alt="PlugImg">
      <div class="track-info">
        <h4 class="list-h m-2">Крутой трек</h4>
        <p class="author list-h m-2">Крутой автор</p>
      </div>
      <div class="ms-auto d-flex align-items-center">
        <p class="author list-h m-2 ">2:30</p>
        <LikeBtn></LikeBtn>
      </div>
    </div>

    <div class="list-tracks-item d-flex align-items-center px-2 rounded mt-1">
      <img class="list-photo rounded shadow" :src="PlugImg" alt="PlugImg">
      <div class="track-info">
        <h4 class="list-h m-2">Крутой трек</h4>
        <p class="author list-h m-2">Крутой автор</p>
      </div>
      <div class="ms-auto d-flex align-items-center">
        <p class="author list-h m-2 ">2:30</p>
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