import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = defineStore('playerStore', () => {
    // Состояние
    const currentTrack = ref(null);
    const isPlaying = ref(false);
    const volume = ref(1);

    // Действия
    const uploadTrack = (track) => {
        currentTrack.value = track;
    };

    const playTrack = () => {
        isPlaying.value = true;
    };

    const pauseTrack = () => {
        isPlaying.value = false;
    };

    const setVolume = (newVolume) => {
        if (newVolume >= 0 && newVolume <= 1) {
            volume.value = newVolume;
        }
    };

    // Возвращаем состояние и действия
    return {
        currentTrack,
        isPlaying,
        volume,
        uploadTrack,
        playTrack,
        pauseTrack,
        setVolume,
    };
});