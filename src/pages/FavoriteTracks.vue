<script setup>
import HeartEmptySvg from '@/shared/images/heartEmpty.svg'
import ListTracks from "@/modules/tracks/ListTracks.vue";
import BaseSectionTitle from "@/ui/BaseSectionTitle.vue";
</script>

<template>
  <main class="container-fluid p-5 mb-5 min-vh-100">
    <BaseSectionTitle
        header="Любимые треки"
        :src="HeartEmptySvg"
    />
    <ListTracks/>
  </main>
</template>
