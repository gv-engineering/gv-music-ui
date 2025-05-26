<template>
<!--  <h4 class="px-2 color-E0 mt-1">Форма загрузки трека</h4>-->
  <form class="d-flex col-12 gap-2">
    <div class="w-50 my-2 p-2 bg-1E rounded shadow">
      <label for="formFile" class="upload-label color-E0">Выберите файл с устройства</label>
      <div class="align-items-md-center mt-2">
        <input class="form-control upload-input color-E0" type="file">
      </div>
    </div>
 
    <div class="w-50 my-2 p-2 bg-1E ms-auto rounded shadow">
      <label for="formFile" class="upload-label color-E0">Или укажите ссылку на трек</label>
      <div class="align-items-md-center mt-2">
        <input class="form-control upload-input color-E0" type="text">
      </div>
    </div>
  </form>

  <form class="d-flex">
    <div class="w-100 mb-2 p-2 bg-1E rounded shadow">
      <label for="formFile" class="color-E0">(Опционально) заполните данные о загружаемом треке</label>
      <div class="align-items-md-center mt-2">
        

        <div class="d-flex gap-2">
          <div class="w-50">
            <label for="title" class="color-E0 m-0">Название</label>
            <input type="text" class="form-control upload-input" id="title" aria-describedby="Логин">
          </div>

          <div class="w-50">
            <label for="author" class="color-E0 m-0">Автор</label>
            <input type="text" class="form-control upload-input" id="author" aria-describedby="Логин">
          </div>
        </div>
        

        <label for="cover" class="color-E0 m-0">Обложка</label>
        <input class="form-control upload-input color-E0" type="file">
        <button class="btn mt-2">Отправить</button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.upload-label {
  color: #FF4081;
}

.upload-input {
  background-color: #121212;
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
  background-color: #121212;
  color: #E0E0E0;
  transition: all ease 0.3s;
}

button:hover {
  background-color: #FF4081;
  color: #E0E0E0;
  transition: all ease 0.3s;
}
</style>