import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';


// Создаем собственный хук
export const useRequestForm = () => {

    const { handleSubmit, isSubmitting } = useForm(); // Валидация всей формы из пакета 'vee-validate'

    const { value: fio, errorMessage: fError, handleBlur: fBlur } = useField( // Валидация полей из пакета 'vee-validate'
        'fio',
        yup
            .string()
            .trim()
            .required('Введите ваше ФИО'),
    );

    const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
        'phone',
        yup
            .string()
            .trim()
            .required('Введите ваш телефон'),
    );

    const { value: amount, errorMessage: aError, handleBlur: aBlur } = useField(
        'amount',
        yup
            .number()
            .required('Введите сумму')
            .min(0, 'Сумма не может быть меньше 0'),
    );

    const { value: status } = useField('status');

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