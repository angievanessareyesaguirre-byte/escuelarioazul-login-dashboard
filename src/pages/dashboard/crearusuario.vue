<template>
  <v-container class="py-10">
    <v-card max-width="600" class="mx-auto pa-6">
      <v-card-title class="text-h5 font-weight-bold text-primary">
        <v-icon class="mr-2" color="primary">mdi-account-plus</v-icon>
       Crear Nuevo Usuario
      </v-card-title>

      <v-divider class="my-4"></v-divider>

      <v-form ref="form" @submit.prevent="registrarUsuario">
        <v-text-field
          v-model="usuario.nombre"
          label="Nombre completo"
          prepend-inner-icon="mdi-account"
          color="primary"
          required
        />

        <v-text-field
          v-model="usuario.username"
          label="Nombre de usuario"
          prepend-inner-icon="mdi-account-circle"
          color="primary"
          required
        />

        <v-text-field
          v-model="usuario.email"
          label="Correo electrónico"
          prepend-inner-icon="mdi-email"
          color="primary"
          required
        />

        <v-text-field
          v-model="usuario.password"
          label="Contraseña"
          type="password"
          prepend-inner-icon="mdi-lock"
          color="primary"
          required
        />

        <v-select
          v-model="usuario.rol"
          :items="roles"
          label="Rol"
          prepend-inner-icon="mdi-shield-account"
          color="primary"
          required
        />

        <v-btn
          type="submit"
          block
          color="primary"
          class="mt-4"
          size="large"
          :loading="cargando"
        >
          <v-icon class="mr-2">mdi-content-save</v-icon>
          Guardar Usuario
        </v-btn>
      </v-form>

      <v-alert
        v-if="mensaje"
        :type="tipoMensaje"
        class="mt-4"
        border="start"
        variant="tonal"
      >
        {{ mensaje }}
      </v-alert>
    </v-card>
  </v-container>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

// Datos del formulario
const usuario = reactive({
  nombre: "",
  username: "",
  email: "",
  password: "",
  rol: "Estudiante" // valor por defecto
})

const roles = ["Admin", "Docente", "Estudiante", "Secretario/a"]
const cargando = ref(false)
const mensaje = ref("")
const tipoMensaje = ref("success")

// Función para registrar usuario
const registrarUsuario = async () => {
  cargando.value = true
  mensaje.value = ""

  // Evita enviar objetos reactivos (json-server falla con reactive)
  const nuevoUsuario = {
    nombre: usuario.nombre,
    username: usuario.username,
    email: usuario.email,
    password: usuario.password,
    rol: usuario.rol
  }

  try {
    await axios.post("http://localhost:8000/usuarios", nuevoUsuario)

    mensaje.value = "Usuario registrado exitosamente"
    tipoMensaje.value = "success"

    // Limpiar formulario
    usuario.nombre = ""
    usuario.username = ""
    usuario.email = ""
    usuario.password = ""
    usuario.rol = "Estudiante"

    // Redirigir al dashboard luego de 1.5 segundos
    setTimeout(() => {
      router.push("/dashboard")
    }, 1500)

  } catch (error) {
    console.error("Error JSON-SERVER:", error)
    mensaje.value = "Error al registrar usuario"
    tipoMensaje.value = "error"
  }

  cargando.value = false
}
</script>

<style scoped>
.text-primary {
  color: #66b8fa !important;
}
</style>