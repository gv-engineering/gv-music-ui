import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = defineStore('playerStore', () => {
    // Состояние
    const currentTrack = ref(null);
    const isPlaying = ref(false);
    const volume = ref(1);
    const audioRef = ref(null);
    const currentPlayTime = ref(0);
    const currentPlayTimePercents = ref(0);
    const trackDuration = ref(0);

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

    const updatePlayTime = (time) => {
        if (audioRef.value && !isNaN(audioRef.value.duration)) {
            currentPlayTime.value = time;
            trackDuration.value = audioRef.value.duration;
            currentPlayTimePercents.value = Math.min((time / audioRef.value.duration) * 100, 100);
        }
    };

    // Возвращает состояние и действия
    return {
        currentTrack,
        isPlaying,
        volume,
        audioRef,
        currentPlayTime,
        currentPlayTimePercents,
        trackDuration,
        uploadTrack,
        playTrack,
        pauseTrack,
        setVolume,
        updatePlayTime,
    };
});