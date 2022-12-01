import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { // Доп данные, которые можем получить через route.meta.layout, и в зависимости от них показывать нужный компонент
            layout: 'main',
            auth: true,
        },
    },
    {
        path: '/help',
        name: 'Help',
        component: () => import('../views/Help.vue'),
        meta: {
            layout: 'main',
            auth: true,
        },
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('../views/Auth.vue'),
        meta: {
            layout: 'auth',
            auth: false,
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {

});

export default router;
