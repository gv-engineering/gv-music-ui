<script setup>
import allTracksSvg from '@/shared/images/alltracks.svg';
import ListTracks from "@/modules/tracks/ListTracks.vue";
import BaseSectionTitle from "@/ui/BaseSectionTitle.vue";
</script>

<template>
  <main class="container-fluid p-5 mb-5 min-vh-100">
    <BaseSectionTitle
        header="Вся музыка сервиса"
        :src="allTracksSvg"
    />
    <ListTracks/>
  </main>
</template>
