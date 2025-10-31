<template>
  <v-app id="inspire">
    
    <v-toolbar 
      class="text-black"
      height="100"
      color="#B3E5FC"
      app 
    >
      <v-btn icon="mdi-menu"></v-btn>
      <v-toolbar-title text="Institución Educativa Río Azul"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon to="/" title="Salir">
        <v-icon>mdi-logout</v-icon> 
      </v-btn>
    </v-toolbar>
    
    <v-navigation-drawer
      permanent
      style="margin-top: 100px; width: 256px;" >
      
      <v-list>
        <v-list-item
          :prepend-avatar="escudoImg" 
          subtitle="rioazul.edu.co"
          title="RIO AZUL"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item 
          prepend-icon="mdi-account-plus" 
          title="Registro Estudiantes" 
          value="RegistroEstudiantes" 
          to="/dashboard/registro" 
        ></v-list-item>
        
        <v-list-item 
          prepend-icon="mdi-account-tie" 
          title="Registro Profesores" 
          value="registroprofesores" 
          to="/dashboard/registroprofesores" 
        ></v-list-item>

        <v-list-item 
          prepend-icon="mdi-file-sign" 
          title="Matricula" 
          value="Matricula" 
          to="/dashboard/matricula" 
        ></v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    
    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        
        <v-card
          v-if="$route.path === '/dashboard' || $route.path === '/dashboard/'"
          class="mb-4 text-center"
          color="#E0F2F7" 
          elevation="4" 
        >
          <v-img
            :src="escudoImg"
            contain
            height="150"
            class="mx-auto my-4"
          ></v-img>

          <v-card-title class="headline text-h5">
            ¡Bienvenido/a al Dashboard!
          </v-card-title>
          <v-card-text>
            Explore las opciones disponibles en la barra de navegación lateral.
          </v-card-text>
        </v-card>

        <v-card 
          v-else 
          class="mb-4" 
          elevation="4"
          color="#E0F2F7" 
          min-height="60vh" 
        >
          <v-card-text>
            <router-view />
          </v-card-text>
        </v-card>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  // Asegúrate que la ruta al escudo sea correcta en tu proyecto
  import escudoImg from '@/assets/escudo.jpg'; 
</script>

<style scoped>
/* Estilos necesarios para el layout */
.v-navigation-drawer {
    width: 256px; 
}
/* Estilos para centrar el texto en la tarjeta de bienvenida */
.v-card .headline, .v-card .v-card-text {
    text-align: center;
}
</style>