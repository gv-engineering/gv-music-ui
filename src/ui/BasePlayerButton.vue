<script setup>
import {computed} from "vue";


const props = defineProps({
  icon: {
    type: [Object, String],
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: 25,
  }
});

defineEmits(['click']);

const isFontAwesomeIcon = computed(() => {
  return Array.isArray(props.icon);
});
</script>

<template>
  <button
    @click="$emit('click')"
    class="p-3"
  >
    <font-awesome-icon
        v-if="isFontAwesomeIcon"
        :icon="icon"
        :class="{ 'player-btn-active': active }"
        class="player-btn d-flex justify-content-center align-content-center"
        :style="{ fontSize: size + 'px' }"
    />
    <component
        v-else
        v-html="icon"
        :class="{ 'player-btn-active': active }"
        class="player-btn d-flex justify-content-center align-content-center"
        :style="{ fontSize: size + 'px' }"
    />
  </button>
</template>

<style scoped>
button {
  border: none;
  background: none;
}
button:hover {
  transition: all ease 0.3s;
  background-color: #121212;
  border-radius: 50%;
}
.player-btn {
  color: #941b43;
}
.player-btn-active {
  color: #FF4081;
  transition: all ease 0.3s;
}
</style>