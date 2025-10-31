<template>
 <v-app-bar :elevation="2"
 color=#FFFFFF
 height="150">
<template v-slot:prepend>
  </template>
<v-img
    src="@/assets/escudo.jpg"
    alt="Escudo Colegio Río Azul"
   max-height="80" 
    max-width="80" 
    class="ml-6 mr-4" 
      contain
  ></v-img>
  <v-app-bar-title>Institución Educativa Río Azul</v-app-bar-title>
  <template v-slot:append>
          <v-btn  @click="dialog = true">Iniciar Sesion</v-btn>
        </template>
</v-app-bar>

 <v-dialog
      v-model="dialog"
      width="600px"
    >
       <LoginApp></LoginApp>
  </v-dialog>  
</template>
<script setup>
  import { ref } from 'vue'
     const dialog = ref(false)
</script>