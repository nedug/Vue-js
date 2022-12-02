<template>

   <app-page title="Список заявок">

      <template #header> <!-- для вставки в slot header -->
         <button class="btn primary" @click="modal = true">Создать</button>
      </template>

      <request-table :requests="[]"></request-table>

      <teleport to="body"> <!-- Телепорт предоставляет способ для управления, в каком месте DOM нужно отрисовать часть HTML -->
         <app-modal v-if="modal" title="Создать заявку" @close="modal = false"> <!-- Вызываем событие close из компоненты -->

            <request-modal @created="modal = false"></request-modal> <!-- Вызываем событие created из компоненты -->

         </app-modal>
      </teleport>

   </app-page>

</template>

<script>
import AppPage from '@/components/ui/AppPage';
import RequestTable from '@/components/request/RequestTable';
import { ref } from 'vue';
import AppModal from '@/components/ui/AppModal';
import RequestModal from '@/components/request/RequestModal';


export default {
   setup() {
      const modal = ref(false); // отвечает за видимость модального окна

      return {
         modal,
      };
   },

   components: { AppPage, RequestTable, AppModal, RequestModal },
};
</script>
