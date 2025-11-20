<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

// 1. CORRECCIÓN DE RUTA: Ruta relativa (sube a 'src/', entra a 'services/')
// Asumiendo que LoginApp.vue está en src/components/
import authService from '../services/authservice' 
import escudoLocalUrl from '@/assets/escudo.jpg' 

// --- Estado del Formulario ---
const username = ref('')
const password = ref('')
const visible = ref(false)
const loading = ref(false) // Para deshabilitar el botón durante el envío
const error = ref('')       // Para mostrar mensajes de error

const router = useRouter()

// Reglas de validación simples
const rules = {
  required: value => !!value || 'Este campo es requerido'
}

/**
 * Función que maneja el proceso de Login (Conexión a db.json)
 */
const handleLogin = async () => {
    // 1. Validar campos básicos
    if (!username.value || !password.value) {
        error.value = 'Por favor, ingrese usuario y contraseña.';
        return;
    }

    loading.value = true;
    error.value = ''; // Limpiar errores anteriores

    try {
        // 2. Llamar al servicio de autenticación con los valores del formulario
        const result = await authService.login(username.value, password.value);

        if (result.success) {
            // 3. Login exitoso: Redirigir al dashboard
            router.push('/dashboard'); 
        } else {
            // 4. Login fallido: Mostrar el mensaje de error del servicio
            error.value = result.message;
        }
    } catch (err) {
        // Manejar errores de conexión
        console.error("Error inesperado durante el login:", err)
        error.value = 'Error de conexión. Verifique que la API (JSON Server) esté corriendo.';
    } finally {
        loading.value = false;
    }
}
</script>

<template>
  <div>
    <v-row class="mt-2 d-flex justify-center">
      <v-col cols="5" class="fondoimagen d-flex flex-column justify-center align-center">
        <div class="mt-4 mb-4" style="width: 150px; height: 150px;">
          <v-img
            :src="escudoLocalUrl" 
            alt="Escudo Colegio Río Azul"
            contain  height="100%"
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

      <v-col cols="6" class="fondo">
        <v-card
          class="mx-auto pa-8 pb-6"
          elevation="8"
          rounded="lg"
          max-width="450" 
          height="400"
        >
            <v-alert
                v-if="error"
                type="error"
                variant="tonal"
                class="mb-4"
                density="compact"
                @click:close="error = ''"
                closable
            >
                {{ error }}
            </v-alert>

          <div class="text-subtitle-1 text-medium-emphasis">Usuario</div>

          <v-text-field
            density="compact"
            placeholder="Ingrese su usuario"
            prepend-inner-icon="mdi-account-outline" 
            variant="outlined"
            v-model="username"              
            :rules="[rules.required]"
            :disabled="loading"
            class="mb-2"
          ></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Contraseña</div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Ingrese su contraseña"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
            v-model="password"              
            :rules="[rules.required]"
            :disabled="loading"
            @keydown.enter="handleLogin"
            class="mb-4"
          ></v-text-field>

          <v-btn
            class="mb-4" color="blue"
            size="large"
            variant="tonal"
            block
            @click="handleLogin"           
            :loading="loading" 
            :disabled="loading"
          >
            Log In
          </v-btn>

          <a
            class="text-caption text-decoration-none text-blue d-block text-center" href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Olvidaste la contraseña?
          </a>

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
