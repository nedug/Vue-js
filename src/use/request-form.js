import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';


// Создаем собственный хук
export const useRequestForm = (fn) => {

    const { handleSubmit, isSubmitting } = useForm( // Валидация всей формы из пакета 'vee-validate'
        {
            initialValues: { status: 'active' }, // Для начальных значений формы
        },
    );

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

    const onSubmit = handleSubmit(fn);


    return {
        fio, phone, amount, fError, fBlur, status, onSubmit, isSubmitting, pError, pBlur, aError, aBlur,
    };
};