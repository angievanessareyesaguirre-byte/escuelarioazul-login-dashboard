<template>
  <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide) in slides" :key="i"
       :src="slide"
        cover
    >
    
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
  const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ]
  const slides = [
    'https://ahoranoticiasecuador.home.blog/wp-content/uploads/2019/10/8.jpg?w=800',
    'https://upload.wikimedia.org/wikipedia/commons/f/f0/Emblem%C3%A1tico_Colegio_Guadalupe_de_Lima_2.jpg',
    'https://bemov.com/wp-content/uploads/2023/08/Colegio-Liceo-De-Cervantes-Barranquilla-1080-1.jpg',
  ]
</script>