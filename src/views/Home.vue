<template>

   <app-page title="Список заявок">

      <template #header> <!-- для вставки в slot header -->
         <button class="btn primary">Создать</button>
      </template>

      <request-table :requests="[]"></request-table>

   </app-page>

</template>

<script>
import AppPage from '@/components/ui/AppPage';
import RequestTable from '@/components/request/RequestTable';

export default {
  components: { AppPage, RequestTable },
}
</script>
