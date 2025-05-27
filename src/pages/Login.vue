<script setup>
import LoginForm from '../modules/users/LoginForm.vue';
</script>

<template>
    <main class="d-flex justify-content-center align-items-center  min-vh-100">
        <div class="Login-card p-4 rounded shadow">
            <h2 class="color-E0">Войдите в аккаунт</h2>
            <LoginForm/>
        </div>
    </main>
</template>

<style>
.Login-card {
    background-color: #1E1E1E;
}
</style>