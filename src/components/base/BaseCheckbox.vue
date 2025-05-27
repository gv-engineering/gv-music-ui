<script setup>
defineProps({
  modelValue: Boolean,
  label: String,
  id: String
})

defineEmits(["update:modelValue"])
</script>

<template>
  <div class="form-check">
    <input
        :id="id"
        type="checkbox"
        :checked="modelValue"
        class="form-check-input"
        @change="$emit('update:modelValue', $event.target.checked)"
    >
    <label
        :for="id"
        class="color-E0">{{ label }}</label>
  </div>
</template>

<style scoped>
.form-check-input {
  background-color: #E0E0E0;
}
.form-check-input:checked {
  transition: all ease .2s;
  background-color: #FF4081;
  border: none;
}

.form-check-input:focus {
  transition: all ease .2s;
  box-shadow: 0 0 0 0.2rem rgba(255, 64, 129, 0.5);;
}
</style>