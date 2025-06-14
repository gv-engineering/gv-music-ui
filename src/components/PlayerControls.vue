<script setup>
import repeatListSvg from '@/shared/images/repeat.svg?raw'
import repeatOneSvg from '@/shared/images/repeatOne.svg?raw'
import shuffleSvg from '@/shared/images/shuffle.svg?raw'
import {computed} from "vue";
import BasePlayerButton from "@/ui/BasePlayerButton.vue";


const props = defineProps({
  isShuffleActive: {
    type: Boolean,
    required: true,
    default: false
  },
  isPlaying: {
    type: Boolean,
    required: true,
    default: false
  },
  repeatState: {
    type: String,
    required: true,
    default: "off"
  }
});

const emit = defineEmits([
    'togglePlaying',
    'prevTrack',
    'nextTrack',
    'toggleRepeat',
    'toggleShuffle'
]);

const isRepeatActive = computed(() => {
  return props.repeatState !== 'off';
});

// Switching the repeat icon depending on state
const currentRepeatSvg = computed(() => {
  return props.repeatState === 'one' ? repeatOneSvg : repeatListSvg;
});
</script>

<template>
  <BasePlayerButton
      :icon="shuffleSvg"
      :active="isShuffleActive"
      @click="emit('toggleShuffle')"
      size="23"
  />
  <BasePlayerButton
      :icon="['fas', 'fa-backward']"
      @click="emit('prevTrack')"
      size="20"
  />
  <BasePlayerButton
      :icon="['fas', isPlaying ? 'fa-pause' : 'fa-play']"
      @click="emit('togglePlaying')"
      size="25"
  />
  <BasePlayerButton
      :icon="['fas', 'fa-forward']"
      @click="emit('nextTrack')"
      size="20"
  />
  <BasePlayerButton
      :icon="currentRepeatSvg"
      :active="isRepeatActive"
      @click="emit('toggleRepeat')"
      size="23"
  />
</template>
