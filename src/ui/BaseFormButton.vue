<script setup>
defineProps({
  text: String,

  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button',
  },
})

defineEmits(['click']);
</script>

<template>
  <button
      class="btn"
      :type="type"
      @click="$emit('click')"
      :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<style scoped>
button {
  background-color: #121212;
  color: #db2763;
  transition: all ease 0.3s;
}

button:hover {
  background-color: #FF4081;
  color: #E0E0E0;
  transition: all ease 0.3s;
}
</style>