<script setup>
import { ref } from "vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";

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
  <form @submit.prevent="register">
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
  </form>
</template>
