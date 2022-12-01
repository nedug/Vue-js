<template>

  <div class="container">
    <app-message></app-message>
    <router-view />  <!-- Обозначем место, куда вставится наш компонент из папки Views -->
  </div>

</template>

<script>
import AppMessage from '@/components/ui/AppMessage';


export default {
  components: { AppMessage },
};
</script>

<style scoped>

</style>