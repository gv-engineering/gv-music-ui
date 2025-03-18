<template>
  <header>
    <div class="navbar container-fluid d-flex justify-content-center align-items-center fixed-top">
      <a class="p-2" href="#">Вся музыка</a>
      <a class="p-2" href="#">Любимые</a>
      <a class="p-2" href="#">Загрузить</a>

      <div class="ms-auto">
        <a class="p-2" href="#">Войти</a>
        <a class="p-2" href="#">Регистрация</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.navbar {
  background-color: #1E1E1E;
}

.navbar a{
  color: #E0E0E0;
  text-decoration: none;
}

.navbar a:hover {
  transform: translate(0px, 1px);
  color: #FF4081;
  transition: all ease .4s;
}


</style>