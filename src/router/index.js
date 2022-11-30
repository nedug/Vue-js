import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { // Доп данные, которые можем получить через route.meta.layout, и в зависимости от них показывать нужный компонент
            layout: 'main',
        },
    },
    {
        path: '/help',
        name: 'Help',
        component: () => import('../views/Help.vue'),
        meta: {
            layout: 'main',
        },
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('../views/Auth.vue'),
        meta: {
            layout: 'auth',
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
