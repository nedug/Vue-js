<template>

   <app-page title="Список заявок">

      <template #header> <!-- для вставки в slot header -->
         <button class="btn primary">Создать</button>
      </template>

   </app-page>

</template>

<script>
import AppPage from '@/components/ui/AppPage';
export default {
  components: { AppPage },
}
</script>
