import { useField, useForm } from 'vee-validate';
import { computed, watch } from 'vue';
import * as yup from 'yup';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


// Создаем собственный хук
export const useLoginForm = () => {

    const store = useStore(); // Получаем store из Vuex
    const router = useRouter(); // Получаем router из vue-router

    const { handleSubmit, isSubmitting, submitCount } = useForm({ // Валидация всей формы из пакета 'vee-validate'
        initialValues: {
            email: 'test@mail.ru',
            password: '123123',
        },
    });

    const onSubmit = handleSubmit(async values => { // Обработчик события Submit
        try {
            console.log('Form:', values);
            await store.dispatch('auth/login', values); // Вызываем actions (login) и передаем values нашей формы
            router.push('/'); // Перенапаправляем на страницу HOME

        } catch (e) {}
    });

    const isTooManyAttempts = computed(() => submitCount.value >= 3);
    // computed - используем, если нужно что то высчитать на основании других данных (переменных)

    watch(isTooManyAttempts, value => value && setTimeout(() => submitCount.value = 0, 2000));
    // watch - следим за какими то данной или переменной, и при изменении вызываем колбэк

    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField( // Валидация полей из пакета 'vee-validate'
        'email',
        yup
            .string()
            .trim()
            .required('Введите ваш email')
            .email('Введите корректный email'),
    );
    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Введите ваш password')
            .min(6, 'Пароль должен быть больше 6 символов'),
    );

    return {
        email, password, eError, pError, eBlur, pBlur, onSubmit, isSubmitting, isTooManyAttempts,
    };
};