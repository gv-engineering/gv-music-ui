<template>
    <form>
        <div class="mb-3">
            <label for="token" class="color-E0 m-0">Токен</label>
            <input type="text" class="form-control" id="token" aria-describedby="Токен">
            <p class="form-desc">выдается разработчиками, без него регистрация не возможна</p>
        </div>
        
        <div class="mb-3">
            <label for="username" class="color-E0 m-0">Логин</label>
            <input type="text" class="form-control" id="username" aria-describedby="Логин">
        </div>

        <div class="mb-2">
            <label for="password" class="color-E0 m-0">Пароль</label>
            <input type="password" class="form-control" id="password" aria-describedby="Пароль">
        </div>
        
        <div class="mb-2">
            <label for="password2" class="color-E0 m-0">Повторите пароль</label>
            <input type="password" class="form-control" id="password2" aria-describedby="Повторите пароль">
        </div>
    
        <button class="btn" type="submit">Войти</button>
    </form>
</template>

<style scoped>
.form-desc {
    color: #aaaaaa;
}

.btn {
  background-color: #121212;
  color: #E0E0E0;
  transition: all ease 0.3s;
}

.btn:hover {
  background-color: #FF4081;
  color: #E0E0E0;
  transition: all ease 0.3s;
}

.form-control {
  background-color: #121212;
  border: none;
  color: #E0E0E0;
}

.form-control:focus {
  transition: all ease .2s;
  box-shadow: 0 0 0 0.2rem rgba(255, 64, 129, 0.5);
  background-color: #121212;
  color: rgba(255, 64, 129, 0.5);
}
</style>