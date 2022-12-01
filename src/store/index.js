import { createStore, createLogger } from 'vuex';
import auth from '@/store/modules/auth.module';


const plugins = [];
if (process.env.NODE_ENV === 'development') {
    plugins.push(createLogger()); // Запускаем Логгер только в режиме разработки
}

export default createStore({
    plugins, // Плагины (к примеру Логгер)

    state: {}, // Формируем глобальный State

    mutations: {}, // Для мутации Store

    actions: {}, // Actions аналогичны мутациям, разница в том, что: actions меняют State через мутации и actions могут содержать асинхронные операции.

    modules: { // Разделение Store на отдельные модули
        auth,
    },
});
