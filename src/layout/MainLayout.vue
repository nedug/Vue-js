<template>

  <the-navbar></the-navbar> <!-- Отображаем компонент TheNavbar -->

  <div class="container with-nav">
     <app-message></app-message>
    <router-view />  <!-- Обозначем место, куда вставится наш компонент из папки Views -->
  </div>

</template>

<script>
import TheNavbar from '@/components/TheNavbar';
import AppMessage from '@/components/ui/AppMessage';


export default {
  components: { AppMessage, TheNavbar },
};
</script>

<style scoped>

</style>