<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="d-flex pb-3 pt-5 align-items-center">
    <img class="rounded" :src="src" :alt="header">
    <h2 class="color-E0 m-2">{{ header }}</h2>
  </div>
</template>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
</style>