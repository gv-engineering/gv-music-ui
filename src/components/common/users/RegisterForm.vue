<script setup>

</script>

<template>
    <form>
        <div class="mb-3">
            <label for="token" class="form-label m-0">Токен</label>
            <input type="text" class="form-control" id="token" aria-describedby="Токен">
            <p class="form-desc">выдается разработчиками, без него регистрация не возможна</p>
        </div>
        
        <div class="mb-3">
            <label for="username" class="form-label m-0">Логин</label>
            <input type="text" class="form-control" id="username" aria-describedby="Логин">
        </div>

        <div class="mb-2">
            <label for="password" class="form-label m-0">Пароль</label>
            <input type="password" class="form-control" id="password" aria-describedby="Пароль">
        </div>
        
        <div class="mb-2">
            <label for="password2" class="form-label m-0">Повторите пароль</label>
            <input type="password" class="form-control" id="password2" aria-describedby="Повторите пароль">
        </div>
    
        <button class="btn" type="submit">Войти</button>
    </form>
</template>

<style scoped>
.Login-card {
    background-color: #1E1E1E;
}

.form-desc {
    color: #aaaaaa;
}
</style>