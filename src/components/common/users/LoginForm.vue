<script setup>

</script>

<template>
    <form>
        <div class="mb-3">
            <label for="username" class="color-E0 m-0">Логин</label>
            <input type="text" class="form-control" id="username" aria-describedby="Логин">
        </div>
        
        <div class="mb-2">
            <label for="password" class="color-E0 m-0">Пароль</label>
            <input type="password" class="form-control" id="password" aria-describedby="Пароль">
        </div>
        
        <div class="form-check mb-2">
            <input type="checkbox" class="form-check-input" id="Check">
            <label class="color-E0" for="Check">Оставаться в сети</label>
        </div>
    
        <button class="btn" type="submit">Войти</button>
    </form>
</template>

<style scoped>
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

.form-check-input:checked {
    transition: all ease .2s;
    background-color: #FF4081;
    border: none;
}

.form-check-input:focus {
    transition: all ease .2s;
    box-shadow: 0 0 0 0.2rem rgba(255, 64, 129, 0.5);;
}
</style>