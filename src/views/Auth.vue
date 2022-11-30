<template>

  <form class="card" @submit.prevent>
    <h1>Войти в систему</h1>

    <div class="form-control">
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email"> <!-- Связываем v-model c нашей валидацией -->
      <small v-if="eError">{{ eError }}</small> <!-- Выводим ошибку из валидации -->
    </div>

    <div class="form-control">
      <label for="password">Пароль</label>
      <input type="password" id="password" v-model="password"> <!-- Связываем v-model c нашей валидацией -->
      <small v-if="pError">{{ pError }}</small> <!-- Выводим ошибку из валидации -->
    </div>

    <button class="btn primary" type="submit">Войти</button>
  </form>

</template>

<script>
import { useField } from 'vee-validate';


export default {
  setup() {

    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField('email'); // Валидация из пакета 'vee-validate'

    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password');

    return {
      email, password, eError, pError, eBlur, pBlur,
    };
  },

};
</script>

<style scoped>

</style>