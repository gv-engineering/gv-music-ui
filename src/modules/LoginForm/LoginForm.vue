<script setup>
import { ref } from 'vue'
import BaseInput from "@/ui/BaseInput.vue";
import BaseCheckbox from "@/ui/BaseCheckbox.vue";
import BaseButton from "@/ui/BaseButton.vue";
import {RouterLink} from "vue-router";

const username = ref('');
const password = ref('');
const agreed = ref(false);

function login() {
  console.log("Login works! " + username.value + ":" + password.value + ":" + agreed.value);
}
</script>

<template>
  <main class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="bg-1E p-4 rounded shadow">
      <h2 class="color-E0">Войдите в аккаунт</h2>
        <form @submit.prevent="login" class="d-flex flex-column gap-3">
          <BaseInput
            id="username"
            label="Логин"
            type="text"
            v-model="username"
          />
          <BaseInput
              id="password"
              label="Пароль"
              type="password"
              v-model="password"
          />
          <BaseCheckbox
              id="Check"
              label="Оставаться в сети"
              v-model="agreed"
          />


          <BaseButton
              text="Войти"
              type="submit"
          />

          <div class="loginBtns d-flex">
            <p>Нет аккаунта?</p>
            <router-link class="ms-2" to="/register">Регистрация</router-link>
          </div>
        </form>
    </div>
  </main>
</template>

<style>
.loginBtns p {
  color: #A0A0A0;
  margin: 0;
}

.loginBtns a {
  color: #E0E0E0;
  text-decoration: none;
}

.loginBtns a:hover {
  color: #FF4081;
  transition: all ease 0.3s;
}
</style>