<template>
   <div class="breadcrumbs" v-if="back">
      <router-link to="/" class="text-white">Вернуться к списку заявок</router-link>
   </div>

   <div class="card">
      <h2 class="card-title">
         {{ title }}

         <slot name="header" /> <!-- Slot для вставки в нужном месте -->
      </h2>

      <slot />
   </div>
</template>

<script>
export default {
   props: {
      title: {
         type: String,
         required: true,
      },
      back: { // для добавления ссылки назад
         type: Boolean,
         default: false,
      },
   },

   setup(props) {
      document.title = `${props.title} | Клон Банка`;
   },
};
</script>

<style scoped>

</style>