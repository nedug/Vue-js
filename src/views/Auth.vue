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

    <button class="btn primary" type="submit">Войти</button>
  </form>

</template>

<script>
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';


export default {
  setup() {

    const { handleSubmit, isSubmitting } = useForm(); // Валидация всей формы из пакета 'vee-validate'
    const onSubmit = handleSubmit(values => console.log(values));

    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField( // Валидация полей из пакета 'vee-validate'
        'email',
        yup
            .string()
            .trim()
            .required()
            .email(),
    );
    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
        'password',
        yup
            .string()
            .trim()
            .required()
            .min(6),
    );

    return {
      email, password, eError, pError, eBlur, pBlur, onSubmit,
    };
  },

};
</script>

<style scoped>

</style>