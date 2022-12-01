export default {
    namespaced: true, // чтобы actions были локальными, а не глобальными

    state() { // Формируем локальный State
        return {
            token: null,
        };
    },

    mutations: { // Единственный способ реально изменить состояние в хранилище Vuex — совершить мутацию.
// В функции-обработчике мы выполняем фактические модификации состояния, и она получает ЛОКАЛЬНОЕ состояние в качестве первого аргумента.
// Функции обработчика мутаций должны быть синхронными!!!
// Вызов мутаций через commit
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('jwt-token', token);
        },
        logout(state) {
            state.token = null;
            localStorage.removeItem('jwt-token');
        },

    },

    actions: { // Actions аналогичны мутациям, разница в том, что: actions меняют State через мутации и actions могут содержать асинхронные операции.
// Actions получают объект Context (context.commit, context.state, context.getters, context.dispatch)
// Actions запускаются - store.dispatch('increment')
        async login({ commit }, payload) {
            commit('setToken', 'TEST TOKEN')
        },
    },

    getters: { // Для получения State без его изменения (Геттеры получат ЛОКАЛЬНОЕ состояние в качестве своего первого аргумента)
        token(state) {
            return state.token;
        },
        isAuth(_, getters) {
            return !!getters.token;
        },
    },
};