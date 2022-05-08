import { createRouter, createWebHistory } from "vue-router"
import Home from '../components/home/Home.vue'
import Work from '../components/Work.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/work',
        name: 'Work',
        component: Work
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router