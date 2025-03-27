<script setup>
import LoginForm from '../components/common/users/LoginForm.vue';
</script>

<template>
    <main class="col-12 p-5 mb-5 min-vh-100 d-flex justify-content-center align-items-center ">
        <div class="Login-card p-4 rounded shadow ">
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