<script setup>
import { ref } from 'vue'
import BaseInput from "@/components/base/BaseInput.vue";
import BaseCheckbox from "@/components/base/BaseCheckbox.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import {RouterLink} from "vue-router";

const username = ref('');
const password = ref('');
const agreed = ref(false);

function login() {
  console.log("Login works! " + username.value + ":" + password.value + ":" + agreed.value);
}
</script>

<template>
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