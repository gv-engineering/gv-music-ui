import jsonInstance from "@/shared/api/axiosInstance.js";

// Getting track list from back-end
export const fetchTracks = async () => {
    try {
        const response = await jsonInstance.get('/tracks');
        return response.data.tracks;
    } catch (error) {
        console.error('Ошибка при загрузки треков:', error);
        throw error;
    }
};