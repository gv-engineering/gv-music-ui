import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('currentTrackStore', {
    state: () => ({
        currentTrack: null,
        isPlaying: false,
        volume: 1,
    }),
    actions: {
        uploadTrack(track) {
            this.currentTrack = track;
        },
        playTrack() {
            this.isPlaying = true;
        },
        pauseTrack() {
            this.isPlaying = false;
        },
        setVolume(newVolume) {
            if (newVolume >= 0 && newVolume <= 1) {
                this.volume = newVolume;
            }
        }
    },
});