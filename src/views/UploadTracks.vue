<script setup>
import PlugImg from '@/assets/images/plug.png'
import ListTracks from "@/components/common/tracks/ListTracks.vue";
import UploadTrackForm from "@/components/common/tracks/UploadTrackForm.vue";
</script>

<template>
  <main class="col-12 p-5 mb-5 min-vh-100">
    <div class="d-flex pb-3 pt-5 align-items-center">
      <img class="h-photo rounded" :src="PlugImg" alt="PlugImg">
      <h2 class="color-E0 m-2 ">Раздел публикации треков</h2>
    </div>

    <UploadTrackForm></UploadTrackForm>

    <form class="d-flex flex-column">
      <h4 class="color-E0 m-2">Загружено вами</h4>
      <ListTracks/>
    </form>

  </main>
</template>