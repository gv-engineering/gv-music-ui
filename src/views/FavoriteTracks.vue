<script setup>
import HeartEmpty from '@/assets/images/heartEmpty.svg'
import ListTracks from "@/components/common/ListTracks.vue";
</script>

<template>
  <main class="container-fluid p-2 px-5 pt-5 min-vh-100 pb-5">
    <div class="d-flex pb-3 pt-5 align-items-center border-bottom border-dark border-2">
      <img class="h-photo rounded" :src="HeartEmpty" alt="Heart">
      <h2 class="list-h m-2 ">Любимые треки</h2>
    </div>

    <ListTracks/>
  </main>
</template>

<style scoped>
</style>