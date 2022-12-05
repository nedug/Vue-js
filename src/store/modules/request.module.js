import { requestAxios } from '@/axios/request';
import store from '@/store';


export default {
    namespaced: true,

    state() {
        return {
            requests: [],
        };
    },

    mutations: {
        setRequest(state, request) {
            state.requests = request;
        },
        addRequest(state, request) {
            state.requests.push(request);
        },
    },

    actions: {
        async create({ commit, dispatch }, payload) {
            try {
                const token = store.getters['auth/token']; // Получаем ТОКЕН из Store

                const { data } = await requestAxios.post( // Создаем запись в БД Firebase
                    `/requests.json?auth=${token}`, // Нужно смотерть на правила в Firebase
                    payload,
                );

                commit('addRequest', { ...payload, id: data.name }); // Добавляем заявку с ID от сервера

                dispatch( // Показываем сообщение
                    'setMessage',
                    { value: 'Заявка успешно создана!', type: 'primary' },
                    { root: true },
                );
            } catch (e) {
                dispatch(
                    'setMessage',
                    { value: e.message, type: 'danger' },
                    { root: true },
                );
            }
        },
        async load({ commit, dispatch }) {
            try {
                const token = store.getters['auth/token'];

                const { data } = await requestAxios.get(`/requests.json?auth=${token}`);

                const requests = Object.keys(data).map(id => ({ ...data[id], id })); // Формируем объект всех заявок

                commit('setRequest', requests); // Сохраняем все заявки
            } catch (e) {
                dispatch(
                    'setMessage',
                    { value: e.message, type: 'danger' },
                    { root: true },
                );
            }
        },
        async loadOne({ commit, dispatch }, id) {
            try {
                const token = store.getters['auth/token'];

                const { data } = await requestAxios.get(`/requests/${id}.json?auth=${token}`);

                return data;
            } catch (e) {
                dispatch(
                    'setMessage',
                    { value: e.message, type: 'danger' },
                    { root: true },
                );
            }
        },
        async remove({ commit, dispatch }, id) {
            try {
                const token = store.getters['auth/token'];

                await requestAxios.delete(`/requests/${id}.json?auth=${token}`);

                dispatch('setMessage', {
                    value: 'Заявка удалена',
                    type: 'primary'
                }, {root: true})
            } catch (e) {
                dispatch(
                    'setMessage',
                    { value: e.message, type: 'danger' },
                    { root: true },
                );
            }
        },
        async update({ dispatch }, payload) {
            try {
                const token = store.getters['auth/token'];

                await requestAxios.put(`/requests/${id}.json?auth=${token}`, payload);

                dispatch('setMessage', {
                    value: 'Заявка обновлена',
                    type: 'primary'
                }, {root: true})
            } catch (e) {
                dispatch(
                    'setMessage',
                    { value: e.message, type: 'danger' },
                    { root: true },
                );
            }
        },
    },

    getters: {
        requests(state) { // Для получения всех заявок
            return state.requests;
        },
    },
};