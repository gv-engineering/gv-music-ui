<script setup>
import uploadSvg from "@/shared/images/upload.svg";
// import Playlist from "@/modules/Playlists/components/Playlist.vue";
import UploadTrackForm from "@/modules/UploadTrackForm/components/UploadTrackForm.vue";
import BaseSectionTitle from "@/ui/BaseSectionTitle.vue";
</script>

<template>
  <main class="col-12 p-5 mb-5 min-vh-100">
    <BaseSectionTitle header="Раздел публикации треков" :src="uploadSvg"/>

    <UploadTrackForm></UploadTrackForm>

<!--    <div class="d-flex flex-column">-->
<!--      <h4 class="color-E0 m-2">Загружено вами</h4>-->
<!--    </div>-->

  </main>
</template>