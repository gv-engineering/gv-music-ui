import { defineStore } from 'pinia';
import { ref } from 'vue';
import { fetchTracks } from "@/modules/Playlists/api/fetchTracks.js";


export const usePlaylistStore = defineStore('PlaylistStore', () => {
    // States
    const currentPlaylistId = ref("all");
    const currentPlaylistTracks = ref([]);
    const loading = ref(false);
    const error = ref(null);

    // Actions
    async function fetchCurrentTracks() {
        loading.value = true;
        error.value = null;
        try {
            currentPlaylistTracks.value = await fetchTracks();
        } catch (error) {
            error.value = error;
        } finally {
            loading.value = false;
        }
    }

    return {
        // States
        currentPlaylistId,
        currentPlaylistTracks,
        loading,
        error,

        // Actions
        fetchCurrentTracks
    }
})