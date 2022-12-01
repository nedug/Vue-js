export default {
    namespaced: true, // чтобы actions были локальными, а не глобальными
    state() {
        return {
            token: null,
        }
    }
}