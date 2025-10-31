<template>
  <v-app id="inicio"> 
    <v-main>
      <Header_Pagina/>
      <Carrusel_Compo></Carrusel_Compo>
      <InstitucionalApp></InstitucionalApp>
      <AppFooter></AppFooter> 
    </v-main>
  </v-app>
</template>

<script setup>
// Asegúrate de que las rutas a tus componentes sean correctas
import Header_Pagina from '@/components/Header_Pagina.vue';
import Carrusel_Compo from '@/components/Carrusel_Compo.vue';
import InstitucionalApp from '@/components/InstitucionalApp.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style>
/* El color de fondo que quieres para la página de inicio */
body {
  background-color: rgb(181, 212, 253); 
}
</style>