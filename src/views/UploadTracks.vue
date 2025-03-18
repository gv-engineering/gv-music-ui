<script setup>
import PlugImg from '@/assets/images/plug.png'
</script>

<template>
  <main class="col-12 p-2 px-5 pt-5 min-vh-100">
    <div class="d-flex pb-3 pt-5 align-items-center border-bottom border-dark border-2">
      <img class="h-photo rounded" :src="PlugImg" alt="PlugImg">
      <h2 class="list-h m-2 ">Форма загрузки трека</h2>
    </div>

    <form class="d-flex flex-column">
      <h4 class="color-white m-2">Выбрать трек с устройства</h4>
      <input class=" color-white m-2" type="file">
      <button class="w-25 m-2" type="submit">Загрузить</button>
    </form>
  </main>
</template>

<style scoped>
.color-white {
  color: #E0E0E0;
}
</style>