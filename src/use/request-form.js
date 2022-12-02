// Создаем собственный хук
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';


export const useRequestForm = () => {

    const { handleSubmit, isSubmitting } = useForm(); // Валидация всей формы из пакета 'vee-validate'

    const { value: fio, errorMessage: fError, handleBlur: fBlur } = useField( // Валидация полей из пакета 'vee-validate'
        'fio',
        yup
            .string()
            .trim()
            .required('Введите ваш email')
            .email('Введите корректный email'),
    );

    const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
        'phone',
        yup
            .string()
            .trim()
            .required('Введите ваш email')
            .email('Введите корректный email'),
    );

    const { value: amount, errorMessage: aError, handleBlur: aBlur } = useField(
        'amount',
        yup
            .string()
            .trim()
            .required('Введите ваш email')
            .email('Введите корректный email'),
    );

    const { value: status } = useField(
        'status',
        yup
            .string()
            .trim()
            .required('Введите ваш email')
            .email('Введите корректный email'),
    );

    const onSubmit = handleSubmit(async values => { // Обработчик события Submit
        try {
            // console.log('Form:', values);
            // await store.dispatch('auth/login', values); // Вызываем actions (login) и передаем values нашей формы
            // router.push('/'); // Перенапаправляем на страницу HOME

        } catch (e) {
        }
    });


    return {
        fio, phone, amount, fError, fBlur, status, onSubmit, isSubmitting, pError, pBlur, aError, aBlur,
    };
};