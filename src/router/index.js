import { createMemoryHistory, createRouter } from 'vue-router'

import AllTracks from "../views/AllTracks.vue";
import FavoriteTracks from "../views/FavoriteTracks.vue";
import UploadTracks from "@/views/UploadTracks.vue";

const routes = [
    {path: '/', component: AllTracks},
    {path: '/favorite', component: FavoriteTracks},
    {path: '/upload', component: UploadTracks},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router