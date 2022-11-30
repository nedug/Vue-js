<template>

  <main-layout></main-layout>

  <auth-layout></auth-layout>

</template>

<script>
import MainLayout from '@/layout/MainLayout';
import AuthLayout from '@/layout/AuthLayout';


export default {
  setup() {

  },
  components: { MainLayout, AuthLayout },
};

</script>