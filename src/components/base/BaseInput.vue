<script setup>
defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  help: String,

  type: {
    type: String,
    default: 'text'
  },

  id: {
    type: String,
    required: true
  }
})

defineEmits(["update:modelValue"])
</script>

<template>
  <div>
    <label
        v-if="label"
        :for="id"
        class="color-E0 m-0"
    >
      {{ label }}
    </label>

    <input
        class="form-control"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />

    <small
        class="help-desc"
        v-if="help"
    >
      {{ help }}
    </small>
  </div>
</template>

<style scoped>
input {
  background-color: #121212;
  border: none;
  color: #E0E0E0;
}

input:focus {
  transition: all ease .2s;
  box-shadow: 0 0 0 0.2rem rgba(255, 64, 129, 0.5);
  background-color: #121212;
  color: rgba(255, 64, 129, 0.5);
}

.help-desc {
  color: #aaaaaa;
}
</style>