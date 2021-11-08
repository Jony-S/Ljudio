import { createRouter, createWebHistory } from 'vue-router'
import Player from '/src/components/Player.vue'

const routes = [
    {
        path: '/',
        name: 'Player',
        component: Player
    },    {
        path: '/artist',
        name: 'Artists',
        component: Artists
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router