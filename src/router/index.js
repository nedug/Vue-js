import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { // Доп данные, которые можем получить через route.meta.layout, и в зависимости от них показывать нужный компонент
            layout: 'main',
            auth: true, // Роут будет доступен только при авторизации
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

// Защита навигации, которая выполняется перед любой навигацией. Возвращает функцию, удаляющую зарегистрированную защиту.
router.beforeEach((to, from, next) => {

    const requireAuth = to.meta.auth; // Получаем нужна ли авторизация перед каждым роутом

    if (requireAuth && store.getters['auth/isAuth']) {
        next(); // Продолжаем роутинг, если авторизация есть

    } else if (requireAuth && !store.getters['auth/isAuth']) {
        next('auth?message=auth'); // Перенаправляем роутинг, если авторизации нет

    } else {
        next();
    }
});

export default router;
