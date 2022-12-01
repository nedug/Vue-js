<template>

  <div v-if="message" :class="['alert', message.type]">
    <p class="alert-title" v-if="title">{{ title }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>

</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';


export default {
  setup() {
    const store = useStore(); // Получаем store из Vuex
    const message = computed(() => store.state.message);

    const TITLE_MAP = {
      primary: 'Успешно!',
      danger: 'Ошибка!',
      warning: 'Внимание!',
    };

    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : '');

    const close = () => {
      store.commit('clearMessage');
    };

    return { message, title, close };
  },
};
</script>

<style scoped>

</style>