<script setup>
import Timeline from './Timeline.vue';
</script>

<template>
  
  <v-row class="mt-3 mb-3">
    <v-col cols="12" md="4" class="d-flex">
      <v-card color="#E0F2F7" class="fill-height">
        <v-card-title class="text-blue-darken-4">MISIÓN</v-card-title>
        <v-card-subtitle class="text-blue-darken-2">Comprometidos con el cambio.</v-card-subtitle>
        <v-card-text class="text-grey-darken-3">
          El Colegio Río Azul tiene como misión brindar una educación integral que forme estudiantes críticos, solidarios y comprometidos con el cuidado del entorno natural y social. Promovemos el desarrollo de competencias académicas, tecnológicas y emocionales a través de una pedagogía participativa que fomente el respeto, la creatividad y el amor por el aprendizaje.
        </v-card-text>
      </v-card>
      <div class="text-center text-caption"></div>
    </v-col>

    <v-col cols="12" md="4" class="d-flex">
      <v-card color="#E0F2F7" class="fill-height"> 
        <template v-slot:title>
          <span class="text-blue-darken-4">VALORES</span> 
        </template>
        <template v-slot:subtitle>
          <span class="text-blue-darken-2">Nuestros principios que guían cada paso.</span>
        </template>
        <template v-slot:text>
          <span class="text-grey-darken-3">
            En el Colegio Río Azul promovemos el respeto, la responsabilidad y la solidaridad como pilares de una convivencia armoniosa. Creemos en la honestidad y la transparencia como base del crecimiento personal y colectivo, fomentando siempre el amor por la naturaleza y la innovación como motor del aprendizaje y del desarrollo sostenible.
          </span> 
        </template>
      </v-card>
      <div class="text-center text-caption"></div>
    </v-col>

    <v-col cols="12" md="4" class="d-flex">
      <v-card color="#E0F2F7" class="fill-height"> 
        <v-card-item>
          <v-card-title class="text-blue-darken-4">VISIÓN</v-card-title> 
          <v-card-subtitle class="text-blue-darken-2">Soñamos con un futuro sostenible y lleno de conocimiento.</v-card-subtitle> 
        </v-card-item>
        <v-card-text class="text-grey-darken-3"> 
          Ser para el año 2035, una institución educativa líder en innovación pedagógica y sostenibilidad ambiental, reconocida por formar ciudadanos íntegros, con pensamiento crítico, valores humanos sólidos y una profunda conciencia ecológica que contribuya al desarrollo sostenible de su comunidad y del país.
        </v-card-text>
      </v-card>
      <div class="text-center text-caption"></div>
    </v-col>
  </v-row>
  
  <v-divider class="my-12"></v-divider>
  <Timeline /> 
  
</template>