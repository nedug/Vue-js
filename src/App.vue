<template>

   <!--  <h3 class="card">{{ layout }}</h3>-->
   <!--    <main-layout></main-layout>-->
   <!--  <auth-layout></auth-layout>-->

   <component :is="layout + '-layout'" v-if="layout"></component>

</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '@/layout/MainLayout';
import AuthLayout from '@/layout/AuthLayout';


export default {
   setup() {
      const route = useRoute();

      return {
         layout: computed(() => route.meta.layout), // Доп данные, которые можем получаем через route.meta.layout, и в зависимости от них показывать нужный компонент
         // computed - используем, если нужно что то высчитать на основании других данных (переменных)
      };

   },
   components: { MainLayout, AuthLayout },
};

</script>