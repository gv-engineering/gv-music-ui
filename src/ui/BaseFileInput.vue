<script setup>
defineProps({
  multiple: Boolean,
  accept: String,
  label: String,
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Array,
    default: () => []
  }
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <div>
    <label
        class="color-E0"
        :id="id"
        v-if="label"
    >
      {{ label }}
    </label>

    <input
        class="form-control upload-input color-E0 "
        type="file"
        :id="id"
        :accept="accept"
        :multiple="multiple"
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<style scoped>
input {
  background-color: #121212;
  border-color: #1E1E1E;
  color: #E0E0E0;
}

.form-control:focus {
  transition: all ease .2s;
  box-shadow: 0 0 0 0.2rem rgba(255, 64, 129, 0.5);
  background-color: #121212;
  color: rgba(255, 64, 129, 0.5);
}

.form-control[type="file"]::file-selector-button {
  background-color: #121212;
  color: #E0E0E0;
}

.form-control[type="file"]:hover::file-selector-button {
  background-color: #FF4081;
}
</style>