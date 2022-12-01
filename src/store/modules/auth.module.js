export default {
    namespaced: true, // чтобы actions были локальными, а не глобальными

    state() { // Формируем State
        return {
            token: null,
        };
    },

    getters: { // Для получения State без его изменени
        token(state) {
            return state.token;
        },
        isAuth(state) {
            return !!state.token;
        },
    },
};