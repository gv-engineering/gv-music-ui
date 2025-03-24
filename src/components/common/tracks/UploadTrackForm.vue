<script setup>
</script>

<template>
  <h4 class="px-2 color-white mt-1">Форма загрузки трека</h4>
  <form class="d-flex flex-column">
    <div class="px-2 mb-2">
      <label for="formFile" class="color-white">Выберите файл с устройства</label>
      <div class="d-md-flex align-items-md-center gap-2 mt-2">
        <input class="form-control upload-input color-white" type="file">
        <button class="btn mt-2 mt-md-0">Отправить</button>
      </div>


    </div>
  </form>
</template>

<style scoped>
.color-white {
  color: #E0E0E0;
}

.upload-input {
  background-color: #1E1E1E;
  border-color: #1E1E1E;
}

.form-control[type="file"]::file-selector-button {
  background-color: #121212;
  color: #E0E0E0;
}

.form-control[type="file"]:hover::file-selector-button {
  background-color: #FF4081;
}

button {
  background-color: #1E1E1E;
  color: #E0E0E0;
  transition: all ease 0.3s;
}

button:hover {
  background-color: #FF4081;
  color: #E0E0E0;
  transition: all ease 0.3s;
}
</style>