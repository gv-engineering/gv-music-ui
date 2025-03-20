import { defineStore } from 'pinia'

export const useCurrentTrackStore = defineStore('currentTrackStore', {
    state: () => ({
        currentTrack: null,
        isPlaying: false,
    }),
    actions: {
        playTrack(track) {
            this.currentTrack = track;
            this.isPlaying = true;
        },
        pauseTrack() {
            this.isPlaying = false;
        }
    },
});