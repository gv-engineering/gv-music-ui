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
    const trackList = ref([]);

    // Действия
    /*
    Записывает выбранный пользователем трек
    формирует список треков
     */

    const uploadTrack = (track, tracks) => {
        currentTrack.value = track;
        trackList.value = tracks;
    };

    /*
    Устанавливает громкость,
    запускает проигрывание,
    меняет глобальное состояние проигрывания на true
    */
    const playTrack = () => {
        if (audioRef.value) {
            audioRef.value.volume = volume.value;
            audioRef.value.play();
            isPlaying.value = true;   
        }
    };

    // Устанавливает проигрывание трека в начало
    const setPlayTimeStart = () => {
        if (audioRef.value) {
            audioRef.value.currentTime = 0;
        }
    };

    /*
    Инициализирует индекс текущего трека
    запускает следующий трек из очереди
    если трек в очереди последний - запускает первый
     */
    const playNextTrack = () => {
        if (currentTrack.value && audioRef.value) {
            const currentIndex = trackList.value.indexOf(currentTrack.value);
            let nextTrack;

            if (currentIndex >= 0 && currentIndex < trackList.value.length - 1) {
                // Переход к следующему треку
                nextTrack = trackList.value[currentIndex + 1];
            } else {
                // Возврат к первому треку
                nextTrack = trackList.value[0];
            }

            currentTrack.value = nextTrack;
        }
    };

    /*
    Инициализирует индекс текущего трека
    запускает предыдущий трек из очереди
    если трек в очереди первый - запускает последний
    если трек проиграл больше 3 секунд вместо переключения отматывает трек в начало
     */
    const playPrevTrack = () => {
        if (currentTrack.value && audioRef.value) {
            if (audioRef.value.currentTime < 3.0) {
                const currentIndex = trackList.value.indexOf(currentTrack.value);
                let prevTrack;

                if (currentIndex > 0) {
                    prevTrack = trackList.value[currentIndex - 1];
                } else {
                    prevTrack = trackList.value[trackList.value.length - 1];
                }

                currentTrack.value = prevTrack;
            } else {
                setPlayTimeStart();
            }
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

    /*
    Обновляет текущее время проигрывание и длительность трека
    Если трек кончился выполнять переключение
     */

    const updatePlayTime = (time) => {
        if (audioRef.value && !isNaN(audioRef.value.duration)) {
            currentPlayTime.value = time;
            trackDuration.value = audioRef.value.duration;
            currentPlayTimePercents.value = Math.min((time / audioRef.value.duration) * 100, 100);

            if (currentPlayTimePercents.value === 100) {
                playNextTrack();
            }
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
        playPrevTrack,
        playTrack,
        playNextTrack,
        pauseTrack,
        setVolume,
        updatePlayTime,
    };
});