<script setup>
import RegisterForm from '../components/common/users/RegisterForm.vue';
</script>

<template>
    <main class="col-12 p-5 mb-5 min-vh-100 d-flex justify-content-center align-items-center ">
        <div class="Login-card p-4 rounded shadow ">
            <h2 class="list-h">Зарегистрируйте аккаунт</h2>
            <RegisterForm/>
        </div>
    </main>
</template>

<style>
.Login-card {
    background-color: #1E1E1E;
}
</style>