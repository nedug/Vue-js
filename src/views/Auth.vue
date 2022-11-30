<template>

  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>

    <div :class="['form-control', {invalid: eError}]"> <!-- Первый класс из массива всегда, второй только при наличии ошибки -->
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" @blur="eBlur"> <!-- Связываем v-model c нашей валидацией, Слушаем событие blur -->
      <small v-if="eError">{{ eError }}</small> <!-- Выводим ошибку из валидации -->
    </div>

    <div :class="['form-control', {invalid: pError}]">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="password" @blur="pBlur">
      <small v-if="pError">{{ pError }}</small>
    </div>

    <button class="btn primary" type="submit" :disabled="isSubmitting || isTooManyAttempts">Войти</button> <!-- Дизейблим кнопку пока идет отправка -->
    <div class="text-danger" v-if="isTooManyAttempts">Слишком много попыток входа. Попробуйте позже</div>
  </form>

</template>

<script>
import { computed, watch } from 'vue';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';


export default {
  setup() {

    const { handleSubmit, isSubmitting, submitCount } = useForm(); // Валидация всей формы из пакета 'vee-validate'

    const onSubmit = handleSubmit(values => console.log(values));

    const isTooManyAttempts = computed(() => submitCount.value >= 3);
    // computed - используем, если нужно что то высчитать на основании других данных (переменных)

    watch(isTooManyAttempts, value => value && setTimeout(() => submitCount.value = 0, 2000))
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
  },

};
</script>

<style scoped>

</style>