<script setup>
import { ref } from "vue";
import BaseInput from "@/ui/BaseInput.vue";
import BaseButton from "@/ui/BaseButton.vue";
import {RouterLink} from "vue-router";

const registerToken = ref("");
const login = ref("");
const password = ref("");
const passwordConfirmation = ref("");

function register() {
  console.log(
      "Register works! "
      + registerToken.value
      + ":" + login.value
      + ":" + password.value
      + ":" + passwordConfirmation.value
  );
}
</script>

<template>
  <main class="min-vh-100 d-flex justify-content-center align-items-center ">
    <div class="bg-1E p-4 rounded shadow ">
      <h2 class="color-E0">Зарегистрируйте аккаунт</h2>
      <form @submit.prevent="register" class="d-flex flex-column gap-3">
        <BaseInput
          id="registerToken"
          label="Токен"
          type="text"
          v-model="registerToken"
          help="выдается разработчиками, без него регистрация не возможна"
        />
        <BaseInput
          id="username"
          label="Логин"
          type="text"
          v-model="login"
        />
        <BaseInput
          id="password"
          label="Пароль"
          type="password"
          v-model="password"
        />
        <BaseInput
          id="password2"
          label="Повторите пароль"
          type="password"
          v-model="passwordConfirmation"
        />

        <BaseButton
          text="Регистрация"
          type="submit"
          @click="register"
        />

        <div class="loginBtns d-flex">
          <p>Есть аккаунт?</p>
          <router-link class="ms-2" to="/register">Войти</router-link>
        </div>
      </form>
    </div>
  </main>
</template>