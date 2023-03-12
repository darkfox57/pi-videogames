import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    watch: true
  },
  server: {
    watch: {
      // Aquí agregamos todos los archivos dentro de "src"
      include: 'src/**'
    }
  }
})
