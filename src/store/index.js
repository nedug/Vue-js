import { createStore, createLogger } from 'vuex';
import auth from '@/store/modules/auth.module';


const plugins = [];
if (process.env.NODE_ENV === 'development') {
    plugins.push(createLogger()); // Запускаем Логгер только в режиме разработки
}

export default createStore({
    plugins, // Плагины (к примеру Логгер)

    state() { // Формируем глобальный State
        return {
            message: null,
        };
    },

    mutations: { // Для мутации Store
        setMessage(state, message) {
            state.message = message;
        },
        clearMessage(state) {
            state.message = null;
        },
    },

    actions: { // Actions аналогичны мутациям, разница в том, что: actions меняют State через мутации и actions могут содержать асинхронные операции.
        setMessage({ commit }, message) {
            commit('setMessage', message);
            setTimeout(() => {
                commit('clearMessage');
            }, 5000);
        },
    },

    modules: { // Разделение Store на отдельные модули
        auth,
    },
});
