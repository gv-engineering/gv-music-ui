<script setup>
import HeartEmpty from '@/assets/images/heartEmpty.svg'
import ListTracks from "@/components/common/tracks/ListTracks.vue";
</script>

<template>
  <main class="container-fluid p-5 mb-5 min-vh-100">
    <div class="d-flex pb-3 pt-5 align-items-center">
      <img class="h-photo rounded" :src="HeartEmpty" alt="Heart">
      <h2 class="color-E0 m-2 ">Любимые треки</h2>
    </div>

    <ListTracks/>
  </main>
</template>

<style scoped>
</style>