import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Player from '/src/components/Player.vue'
import Artist from '/src/components/Artist.vue'
import About from '/src/components/About.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, 
    {
        path: '/player/:videoId',
        name: 'player',
        component: Player
    },   
    {
        path: '/artist',
        name: 'artist',
        component: Artist
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router