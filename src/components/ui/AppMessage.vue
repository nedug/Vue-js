<template>
  <div v-if="message" :class="['alert', message.type]">
    <!--      <p class="alert-title" v-if="title">{{title}}</p>-->
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>

  <!--    <div v-if="message" :class="['alert', 'danger']">-->

  <!--      <p>{{message}}</p>-->
  <!--&lt;!&ndash;      <span class="alert-close" @click="close">&times;</span>&ndash;&gt;-->
  <!--    </div>-->

  <!--  <div class="card">Привет!!</div>-->

</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';


export default {
  setup() {
    const store = useStore(); // Получаем store из Vuex
    const message = computed(() => store.state.message);

    return { message };
  },

};
</script>

<style scoped>

</style>