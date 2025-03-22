import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = defineStore('playerStore', () => {
    // Состояние
    const currentTrack = ref(null);
    const isPlaying = ref(false);
    const volume = ref(1);
    const audioRef = ref(null);

    // Действия
    // Записывает выбранный пользователем трек 
    const uploadTrack = (track) => {
        currentTrack.value = track;
    };

    /* 
        Устанавливает громкость, запускает проигрывание
        Меняет глобальное состояние проигрывания на true
    */
    const playTrack = () => {
        if (audioRef.value) {
            audioRef.value.volume = volume.value;
            audioRef.value.play();
            isPlaying.value = true;   
        }
    };
    // Выключает проигрывание, меняет глобальное состояние проигрывания на false
    const pauseTrack = () => {
        if (audioRef.value) {
            audioRef.value.pause();
            isPlaying.value = false;
        }
    };

    // Устанавливает глобальную громкость & Если проигрывание запущено меняет громкость
    const setVolume = (newVolume) => {
        if (newVolume >= 0 && newVolume <= 1) {
            volume.value = newVolume;
            if (audioRef.value) {
                audioRef.value.volume = volume.value;
            }
        }
    };

    // Возвращает состояние и действия
    return {
        currentTrack,
        isPlaying,
        volume,
        audioRef,
        uploadTrack,
        playTrack,
        pauseTrack,
        setVolume,
    };
});