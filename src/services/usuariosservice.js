import axios from 'axios'

const API_URL = 'http://localhost:8000/usuarios' 

export default {
    /**
     * Registra un nuevo usuario en la DB (json-server) usando un POST.
     */
    async create(userData) {
        try {
            const response = await axios.post(API_URL, userData)
            return {
                success: true,
                user: response.data,
                message: "Usuario creado exitosamente."
            }
        } catch (error) {
            console.error('Error al crear usuario:', error)
            return {
                success: false,
                message: "Error al intentar crear el usuario."
            }
        }
    },
    
    // Aquí irían funciones como getAll(), update(), delete(), etc.
}