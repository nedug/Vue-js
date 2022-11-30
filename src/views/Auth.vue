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

  },
};
</script>

<style scoped>

</style>