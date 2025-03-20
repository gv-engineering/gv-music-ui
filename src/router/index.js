import { createWebHistory, createRouter } from 'vue-router'

import AllTracks from "@/views/AllTracks.vue";
import FavoriteTracks from "@/views/FavoriteTracks.vue";
import UploadTracks from "@/views/UploadTracks.vue";
import Login from '@/views/Login.vue';

const routes = [
    { path: '/', component: AllTracks },
    { path: '/favorite', component: FavoriteTracks },
    { path: '/upload', component: UploadTracks },
    { path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link',
})

export default router