import { usePlaylistStore } from "@/modules/Playlists/index.js";
import {usePlayerStore} from "@/modules/Player/index.js";


export function useStoreAPI() {
    const playlistStore = usePlaylistStore();
    const playerStore = usePlayerStore();

    // refs from PlaylistStore
    async function loadPlaylistToPlayer() {
        await playlistStore.fetchCurrentTracks();
        const tracks = playlistStore.currentPlaylistTracks;
        const firstTrack = tracks[0] || null;

        if (firstTrack) {
            playerStore.uploadTracks(tracks);
        }
    }

    return {
        loadPlaylistToPlayer,
    }
}