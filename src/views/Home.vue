<template>

   <app-page title="Список заявок">

      <template #header> <!-- для вставки в slot header -->
         <button class="btn primary" @click="modal = true">Создать</button>
      </template>

      <request-table :requests="requests"></request-table> <!-- Отображаем все заявки -->

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
import { computed, ref, onMounted } from 'vue';
import AppModal from '@/components/ui/AppModal';
import RequestModal from '@/components/request/RequestModal';
import { useStore } from 'vuex';


export default {
   setup() {
      const store = useStore();
      const modal = ref(false); // отвечает за видимость модального окна
      const loading = ref(false); // отвечает за loading

      onMounted(async () => {
         loading.value = true;
         await store.dispatch('request/load');
         loading.value = false;
      });

      const requests = computed(() => store.getters['request/requests']); // Получаем список всех заявок

      return {
         modal, requests, loading,
      };
   },

   components: { AppPage, RequestTable, AppModal, RequestModal },
};
</script>
