import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePaginationStore = defineStore('PaginationStore', () => {
    // States
    const currentPage = ref(1);
    const limit = ref(10);
    const totalPages = ref(0);

    // Actions
    const setPage = (page) => {
        currentPage.value = page
    };
    
    const setTotalPages = (total) => {
        totalPages.value = total;
    };

    const prevPage = () => {
        if (paginationStore.currentPage > 1) {
            paginationStore.setPage(paginationStore.currentPage - 1);
            fetchTracks();
        }
    };
      
    const nextPage = () => {
        if (paginationStore.currentPage < paginationStore.totalPages) {
            currentPage.value = currentPage.value + 1;
            fetchTracks();
        }
    };

    // Return actions and states
    return {
        currentPage,
        limit,
        totalPages,
        setPage,
        setTotalPages,
        prevPage,
        nextPage
    };
});