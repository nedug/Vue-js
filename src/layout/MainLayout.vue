<template>

   <the-navbar></the-navbar> <!-- Отображаем компонент TheNavbar -->

   <the-sidebar></the-sidebar> <!-- Отображаем компонент TheSidebar -->

   <div class="container with-nav">
      <app-message></app-message>
      <router-view />  <!-- Обозначем место, куда вставится наш компонент из папки Views -->
   </div>

</template>

<script>
import TheNavbar from '@/components/TheNavbar';
import AppMessage from '@/components/ui/AppMessage';
import TheSidebar from '@/components/TheSidebar';


export default {
   components: { AppMessage, TheNavbar, TheSidebar },
};
</script>

<style scoped>

</style>