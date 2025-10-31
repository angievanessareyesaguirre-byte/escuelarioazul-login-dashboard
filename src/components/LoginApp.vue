<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import escudoLocalUrl from '@/assets/escudo.jpg' 

const visible = ref(false) // Se define 'visible' una sola vez.
const router = useRouter()
const login = () => router.push('dashboard')
</script>

<template>
  <div>
    <v-row class="mt-2 d-flex justify-center">
      <v-col cols="4" class="fondoimagen d-flex flex-column justify-center align-center">
        <div class="mt-4 mb-4" style="width: 150px; height: 150px;">
          <v-img
            :src="escudoLocalUrl" 
            alt="Escudo Colegio Río Azul"
            contain  height="100%"
            width="100%"
          ></v-img>
        </div>

        <div 
          class="text-subtitle-1 text-center text-white" 
          style="white-space: normal; line-height: 1.2; font-weight: 500;"
        >
          COLEGIO RÍO AZUL
        </div>
        
        <div 
          class="text-caption text-center text-white pb-4"
        >
          ¡Bienvenidos a nuestra plataforma!
        </div>
      </v-col>

      <v-col cols="5" class="fondo">
        <v-card
          class="mx-auto pa-8 pb-6"
          elevation="8"
          rounded="lg"
          max-width="350" 
          height="350"
        >
          <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>

          <v-text-field
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          ></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
           contraseña
          </div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'contraseña'"
            density="compact"
            placeholder="ingresa tu contraseña"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>

          <v-btn
            class="mb-4" color="blue"
            size="large"
            variant="tonal"
            block
            @click="login" >
            Log In
          </v-btn>

          <a
            class="text-caption text-decoration-none text-blue d-block text-center mb-4" href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Olvidaste la contraseña?
          </a>

          <v-card-text class="text-center pa-0"> 
            <a
              class="text-blue text-decoration-none"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.fondo {
  background-color: rgb(243, 226, 179);
}

.fondoimagen {
  background-color: rgb(113, 180, 243);
}
</style>