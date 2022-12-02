import { requestAxios } from '@/axios/request';
import store from '@/store';
import { error } from '@/utils/error';


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

                const token = store.getters.token;

                const { data } = await requestAxios.post(
                    `/requests.json?auth=${token}`,
                    { ...payload, returnSecureToken: true },
                );
                dispatch(
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
    },

    getters: {},
};