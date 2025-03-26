<script setup>
</script>

<template>
<!--  <h4 class="px-2 color-E0 mt-1">Форма загрузки трека</h4>-->
  <form class="d-flex col-12">
    <div class="col-6 m-2">
      <label for="formFile" class="color-E0">Выберите файл с устройства</label>
      <div class="align-items-md-center mt-2">
        <input class="form-control upload-input color-E0" type="file">
        <button class="btn mt-2">Отправить</button>
      </div>
    </div>

    <div class="col-6 m-2">
      <label for="formFile" class="color-E0">Или укажите ссылку на трек</label>
      <div class="align-items-md-center mt-2">
        <input class="form-control upload-input color-E0" type="text">
        <button class="btn mt-2">Отправить</button>
      </div>
    </div>


<!--    <div class="px-2 mb-2">-->



<!--    </div>-->
  </form>
</template>

<style scoped>
.upload-input {
  background-color: #1E1E1E;
  border-color: #1E1E1E;
  color: #E0E0E0;
}

.form-control:focus {
  transition: all ease .2s;
  box-shadow: 0 0 0 0.2rem rgba(255, 64, 129, 0.5);
  background-color: #121212;
  color: rgba(255, 64, 129, 0.5);
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