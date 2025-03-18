import { createMemoryHistory, createRouter } from 'vue-router'

import AllTracks from "../views/AllTracks.vue";

const routes = [
    {path: '/', component: AllTracks},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router