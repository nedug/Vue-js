<template>

  <nav class="navbar">
    <h1>Online Bank</h1>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Заявки</router-link>
      </li>
      <li>
        <router-link to="/help">Помощь</router-link>
      </li>
      <li>
        <a href="#">Сообщения</a>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Выход</a>
      </li>
    </ul>
  </nav>

</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


export default {
  setup() {
    const store = useStore(); // Получаем store из Vuex
    const router = useRouter(); // Получаем router из vue-router

    return {
      logout: () => {
        store.commit('auth/logout'); // Запускаем мутацию logout
        router.push('/auth'); // Перенапаправляем на страницу HOME
      },
    };
  },

};
</script>

<style scoped>

</style>