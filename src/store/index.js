import { createStore } from 'vuex';


export default createStore({
    state: {}, // Формируем глобальный State

    mutations: {}, // Для мутации Store

    actions: {}, // Actions аналогичны мутациям, разница в том, что: actions меняют State через мутации и actions могут содержать асинхронные операции.

    modules: {}, // Разделение Store на отдельные модули
});
