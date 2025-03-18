<script setup>
import HeartEmpty from '@/assets/images/heartEmpty.svg'
import PlugImg from '@/assets/images/plug.png'
</script>

<template>
  <main class="container-fluid p-2 px-5 pt-5 min-vh-100 pb-5">
    <div class="d-flex pb-3 pt-5 align-items-center border-bottom border-dark border-2">
      <img class="h-photo rounded" :src="HeartEmpty" alt="Heart">
      <h2 class="list-h m-2 ">Любимые треки</h2>
    </div>

    <div id="track-list"></div>

    <div class="list-track d-flex align-items-center px-2 rounded">
      <img class="list-photo rounded" :src="PlugImg" alt="PlugImg">
      <div class="">
        <h4 class="list-h m-2">Крутой трек</h4>
        <p class="author list-h m-2">Крутой трек</p>
      </div>
      <div class="ms-auto d-flex align-items-center">
        <p class="author list-h m-2 ">2:30</p>
        <i class="heart-btn far fa-heart"></i>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>