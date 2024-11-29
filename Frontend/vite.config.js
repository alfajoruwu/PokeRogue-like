import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Asegura que Vite escuche en todas las interfaces de red
    port: 5173   // Asegúrate de que el puerto sea el mismo que has mapeado en Docker
  }
})
