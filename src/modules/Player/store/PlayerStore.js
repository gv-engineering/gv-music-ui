import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePlayerStore = defineStore('playerStore', () => {
    // States
    const currentTrack = ref(null);
    const isPlaying = ref(false);
    const volume = ref(1);
    const audioRef = ref(null);
    const currentPlayTime = ref(0);
    const currentPlayTimePercents = ref(0);
    const trackDuration = ref(0);
    const trackList = ref([]);
    const shuffledTrackList = ref([]);
    const repeatStatus = ref("none");
    const shuffleStatus = ref(false);
    const tracksQueue = ref([]);

    // Actions
    /*
    Records the track selected by the user
    generates a track list depending on the shuffle state
     */
    const uploadTrack = (track, tracks) => {
        currentTrack.value = track;

        trackList.value = tracks;
        if (shuffleStatus.value) {
            shuffleList();
            tracksQueue.value = [...shuffledTrackList.value];
        } else {
            tracksQueue.value = [...trackList.value];
        }
    };

    /*
    Sets the volume,
    starts playback,
    changes the global playback state to true
    */
    const playTrack = () => {
        if (audioRef.value) {
            audioRef.value.volume = volume.value;
            audioRef.value.play();
            isPlaying.value = true;   
        }
    };

    // Sets track playback to the beginning
    const setPlayTimeStart = () => {
        if (audioRef.value) {
            audioRef.value.currentTime = 0;
        }
    };

    /*
    Initializes the index of the current track
    starts the next track from the queue
    monitors the repeat value and depending on the status repeats/unrepeats the queue
     */
    const AutoNextTrack = () => {
        // Validator. Checks if the track is selected and mounted in the DOM
        if (!currentTrack.value && !audioRef.value) {
            return;
        }

        // Index initialize
        const currentIndex = tracksQueue.value.indexOf(currentTrack.value);
        let nextTrack;

        // Validator. Cheks index for broken value 
        if (currentIndex < 0) {
            return;
        }

        // Run repeat when repeat === list
        if (repeatStatus.value === "list") {
            if (currentIndex < tracksQueue.value.length - 1) {
                // Play next track
                nextTrack = tracksQueue.value[currentIndex + 1];
            } else {
                // Play firt track from queue
                nextTrack = tracksQueue.value[0];
            }
    
        // Run repeat one track whe status track
        } else if (repeatStatus.value === "track") {
            currentTrack.value = tracksQueue.value[currentIndex];
            playTrack();
            return;

        // Run norepeat mod when status none or else
        } else {
            if (currentIndex < tracksQueue.value.length - 1) {
                nextTrack = tracksQueue.value[currentIndex + 1];
            } else {
                pauseTrack();
                return;
            }
        }
        currentTrack.value = nextTrack;
    };

    // Manual play next track via btn in Player
    const playNextTrack = () => {
        // Validator. Checks if the track is selected and mounted in the DOM
        if (!currentTrack.value && !audioRef.value) {
            return;
        }
        
        // Index initializ
        const currentIndex = tracksQueue.value.indexOf(currentTrack.value);
        let nextTrack;

        // Validator. Cheks index for broken value 
        if (currentIndex < 0) {
            return;
        }

        if (currentIndex < tracksQueue.value.length - 1) {
            // Play next track
            nextTrack = tracksQueue.value[currentIndex + 1];
        } else {
            // Play firt track from queue
            nextTrack = tracksQueue.value[0];
        }
        currentTrack.value = nextTrack;
    };

    /*
    Initializes the index of the current track
    starts the previous track from the queue
    if the track has played for more than 3 seconds instead of switching, rewinds the track to the beginning
     */
    const playPrevTrack = () => {
        if (currentTrack.value && audioRef.value) {
            if (audioRef.value.currentTime < 3.0) {
                const currentIndex = tracksQueue.value.indexOf(currentTrack.value);
                let prevTrack;

                if (currentIndex > 0) {
                    prevTrack = tracksQueue.value[currentIndex - 1];
                } else {
                    prevTrack = tracksQueue.value[tracksQueue.value.length - 1];
                }

                currentTrack.value = prevTrack;
            } else {
                setPlayTimeStart();
            }
        }
    };

    // Turns off playback, changes global playback state to false
    const pauseTrack = () => {
        if (audioRef.value) {
            audioRef.value.pause();
            isPlaying.value = false;
        }
    };

    // Sets the global volume & If playback is running changes the volume
    const setVolume = (newVolume) => {
        if (newVolume >= 0 && newVolume <= 1) {
            volume.value = newVolume;
            if (audioRef.value) {
                audioRef.value.volume = volume.value;
            }
        }
    };

    /*
    Updates the current playing time and track duration
    If the track is over performs a toggle
     */

    const updatePlayTime = (time) => {
        if (audioRef.value && !isNaN(audioRef.value.duration)) {
            currentPlayTime.value = time;
            trackDuration.value = audioRef.value.duration;
            currentPlayTimePercents.value = Math.min((time / audioRef.value.duration) * 100, 100);

            if (currentPlayTimePercents.value === 100) {
                AutoNextTrack();
            }
        }
    };

    // Change repeat mod
    const toggleRepeat = () => {
        if (repeatStatus.value === "none") { // If any repeat is disabled enable list repeat
            repeatStatus.value = "list";
        } else if (repeatStatus.value === "list") { // If list repeat is enabled enable track repeat
            repeatStatus.value = "track";
        } else { // If track repeat is enabled disable repeat
            repeatStatus.value = "none";
        }
    };

    // change shuffle mod
    const toggleShuffle = () => {
        if (shuffleStatus.value) {
            shuffleStatus.value = false;
            tracksQueue.value = [...trackList.value];
        } else {
            shuffleStatus.value = true;
            if (trackList.value) {
                shuffleList();
                tracksQueue.value = [...shuffledTrackList.value];
            }
        }
    };

    // shuffle tracklist and input result in new array
    const shuffleList = () => {
        shuffledTrackList.value = [...trackList.value];
        for (let i = shuffledTrackList.value.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTrackList.value[i], shuffledTrackList.value[j]] = [shuffledTrackList.value[j], shuffledTrackList.value[i]];
        }
    };

    // Return actions and states
    return {
        currentTrack,
        isPlaying,
        volume,
        audioRef,
        currentPlayTime,
        currentPlayTimePercents,
        trackDuration,
        repeatStatus,
        shuffleStatus,
        uploadTrack,
        playPrevTrack,
        playTrack,
        playNextTrack,
        pauseTrack,
        setVolume,
        updatePlayTime,
        toggleRepeat,
        toggleShuffle,
    };
});