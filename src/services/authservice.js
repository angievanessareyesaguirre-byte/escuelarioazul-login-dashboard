import axios from 'axios'

// 🎯 Puerto 8000 y recurso 'usuarios' (como en tu db.json)
const API_URL = 'http://localhost:8000/usuarios' 

export default {
    /**
     * Login: busca el usuario en json-server y guarda la sesión en localStorage.
     */
    async login(username, password) {
        // Usa el filtro de json-server para buscar por usuario y contraseña
        const URL_FILTRADA = `${API_URL}?usuario=${username}&password=${password}`;

        try {
            const response = await axios.get(URL_FILTRADA);
            
            // Si encuentra al menos 1 usuario, el login es exitoso
            if (response.data && response.data.length > 0) {
                const user = response.data[0];
                
                const userSession = {
                    id: user.id,
                    username: user.usuario, // Usamos 'usuario' para el campo de login
                    email: user.email,
                    nombre: user.nombre
                }
                
                // Guardar la sesión para que el Dashboard verifique que está logeado
                localStorage.setItem('user', JSON.stringify(userSession))
                return { success: true, user: userSession }
            }
            
            return { success: false, message: 'Usuario o contraseña incorrectos' }

        } catch (error) {
            console.error("Error de conexión o API:", error);
            return { success: false, message: 'Error al conectar con el servidor.' }
        }
    },
    
    // Logout: limpia localStorage
    logout() {
        localStorage.removeItem('user')
    },
    
    // Verifica si hay sesión activa
    isAuthenticated() {
        return !!localStorage.getItem('user')
    },
    
    // Obtiene usuario actual
    getCurrentUser() {
        const user = localStorage.getItem('user')
        return user ? JSON.parse(user) : null
    }
}