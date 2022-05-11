import { createRouter, createWebHistory } from "vue-router"
import Home from '../pages/home/Home.vue'
import Work from '../pages/work/Work.vue'
import About from '../pages/about/About.vue'
import Contact from '../pages/contact/Contact.vue'

const routes = [{
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