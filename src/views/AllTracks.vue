<script setup>
import allTracksSvg from '@/assets/images/alltracks.svg';
</script>

<template>
  <main class="container-fluid p-2 px-5 pt-5 min-vh-100 pb-5">
    <div class="d-flex pb-3 pt-5 align-items-center border-bottom border-dark border-2">
      <img class="h-photo rounded" :src="allTracksSvg" alt="All Tracks">
      <h2 class="list-h m-2 ">Вся музыка сервиса</h2>
    </div>

    <div id="track-list"></div>
  </main>
</template>

<style scoped>

</style>