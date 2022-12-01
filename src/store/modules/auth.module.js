export default {
    namespaced: true, // чтобы actions были локальными, а не глобальными

    state() { // Формируем локальный State
        return {
            token: null,
        };
    },

    mutations: { // Единственный способ реально изменить состояние в хранилище Vuex — совершить мутацию.
// В функции-обработчике мы выполняем фактические модификации состояния, и она получает состояние в качестве первого аргумента.
// Функции обработчика мутаций должны быть синхронными!!!

    },

    actions: { // Для асинхронных мутаций

    },

    getters: { // Для получения State без его изменения (Геттеры получат состояние в качестве своего первого аргумента)
        token(state) {
            return state.token;
        },
        isAuth(state) {
            return !!state.token;
        },
    },
};