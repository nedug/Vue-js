


// Создаем собственный хук
export const useRequestForm = () => {


    return {
        email, password, eError, pError, eBlur, pBlur, onSubmit, isSubmitting, isTooManyAttempts,
    };
};