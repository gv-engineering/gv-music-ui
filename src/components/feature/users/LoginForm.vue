<script setup>
import { ref } from 'vue'
import BaseInput from "@/components/base/BaseInput.vue";
import BaseCheckbox from "@/components/base/BaseCheckbox.vue";
import BaseButton from "@/components/base/BaseButton.vue";

const username = ref('');
const password = ref('');
const agreed = ref();

function login() {
  console.log("Login works! " + username.value + ":" + password.value);
}
</script>

<template>
  <form @submit.prevent="login">
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
      @click="login"
    />
  </form>
</template>