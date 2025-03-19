<script setup>
import allTracksSvg from '@/assets/images/alltracks.svg';
import ListTracks from "@/components/common/ListTracks.vue";
</script>

<template>
  <main class="container-fluid p-5 mb-5 min-vh-100">
    <div class="d-flex pb-3 pt-5 align-items-center border-bottom border-dark border-2">
      <img class="h-photo rounded" :src="allTracksSvg" alt="All Tracks">
      <h2 class="list-h m-2 ">Вся музыка сервиса</h2>
    </div>

    <ListTracks/>
  </main>
</template>

<style scoped>

</style>