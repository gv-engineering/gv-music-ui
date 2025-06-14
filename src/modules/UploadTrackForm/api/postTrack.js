import jsonInstance from "@/shared/api/axiosInstance.js";

// Post track to back-end
export const postTrack = async (file, cover, title, artist) => {
    const formData = new FormData();

    formData.append('music_track_file', file);
    if (cover) formData.append('music_track_cover_file', cover);
    if (title) formData.append('music_track_title', title);
    if (artist) formData.append('music_track_artist', artist);

    try {
        const response = await jsonInstance.post('/tracks/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (error) {
        console.error('ошибка при загрузке трека:', error);
        throw error;
    }
}