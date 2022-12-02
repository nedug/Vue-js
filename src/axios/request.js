import axios from 'axios';
import router from '../router';


export const requestAxios = axios.create({
    baseURL: process.env.VUE_APP_FB_URL,
});

// Если ТОКЕН просрочен и ответ сервера - ошибка сервера 401 (нет авторизации). Тогда перехватываем ответ и перенаправляем на страницу авторизации
requestAxios.interceptors.response.use(null, error => { // Для перехвата ответа сервера. Проверяем при ошибке
    if (error.response.status === 401) {
        router.push('/auth?message=auth');
    }

    return Promise.reject(error);
});