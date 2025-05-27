import { createWebHistory, createRouter } from 'vue-router'

import AllTracks from "@/pages/AllTracks.vue";
import FavoriteTracks from "@/pages/FavoriteTracks.vue";
import UploadTracks from "@/pages/UploadTracks.vue";
import Login from '@/pages/Login.vue';
import Register from '@/pages/Register.vue';

const routes = [
    { path: '/', component: AllTracks },
    { path: '/favorite', component: FavoriteTracks },
    { path: '/upload', component: UploadTracks },
    { path: '/login', component: Login },
    { path: '/register', component: Register}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link',
})

export default router