<template>

  <the-navbar></the-navbar> <!-- Отображаем компонент TheNavbar -->

  <div class="container with-nav">
    <router-view />  <!-- Обозначем место, куда вставится наш компонент из папки Views -->
  </div>

</template>

<script>
import TheNavbar from '@/components/TheNavbar';


export default {
  components: { TheNavbar },
};
</script>

<style scoped>

</style>