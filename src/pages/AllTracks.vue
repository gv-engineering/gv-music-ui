<script setup>
import allTracksSvg from '@/shared/images/alltracks.svg';
import BaseSectionTitle from "@/ui/BaseSectionTitle.vue";
import {Playlist} from "@/modules/Playlists/index.js";
</script>

<template>
  <main class="container-fluid p-5 mb-5 min-vh-100">
    <BaseSectionTitle
        header="Вся музыка сервиса"
        :src="allTracksSvg"
    />
    <Playlist/>
  </main>
</template>
