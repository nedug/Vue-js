<template>

  <form class="card" @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>

     <h4 class="text-danger">Для теста используйте пресохраненный логин и пароль</h4>

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

    <button class="btn primary" type="submit" :disabled="isSubmitting || isTooManyAttempts">Войти</button>
    <!-- Дизейблим кнопку пока идет отправка -->
    <div class="text-danger" v-if="isTooManyAttempts">Слишком много попыток входа. Попробуйте позже</div>
  </form>

</template>

<script>

import { useLoginForm } from '@/use/login-form';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { error } from '@/utils/error';


export default {
  setup() {

    const route = useRoute(); // Получаем параметры роута
    const store = useStore(); // Получаем store из Vuex

    if (route.query.message) {
      store.dispatch(
          'setMessage',
          { value: error(route.query.message), type: 'warning' },
          { root: true },
      );
    }

    return { ...useLoginForm() }; // Вызываем собственный хук и с помощью spread раскрываем все поля объекта

  },
};
</script>

<style scoped>

</style>