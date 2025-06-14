<script setup >
import noteSvg from "@/shared/images/note.svg";
import {computed} from "vue";

const props = defineProps({
  track: {
    required: true,
    type: Object,
  }
})

// Formating track duration from seconds to minutes
const durationMinutes = computed(() => {
  if (!props.track.duration) return 'Unknown duration'

  const minutes = Math.floor(props.track.duration / 60)
  const seconds = Math.floor(props.track.duration % 60)
  return `${minutes}:${seconds.toString().padStart(2, "0")}`
})
</script>

<template>
  <div class="list-tracks-item d-flex align-items-center px-3 rounded my-1">
    <img class="list-photo rounded shadow" alt="track cover" :src="track.cover_url || noteSvg">
    <div class="track-info">
      <h4 class="color-E0 m-2">{{ track.title || 'Unknown title' }}</h4>
      <p class="color-A0 m-2">{{ track.artist || 'Unknown artist' }}</p>
    </div>

    <div class="ms-auto d-flex align-items-center">
      <p class="color-A0 m-2">{{ durationMinutes }}</p>
    </div>
  </div>
</template>

<style scoped>
.list-tracks-item  {
  cursor: pointer;
}

.list-tracks-item:hover {
  background-color: #1E1E1E;
  transition: all ease 0.2s;
}

.list-photo {
  width: 50px;
  height: 50px;
}
</style>