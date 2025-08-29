// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Pas besoin d'importer Tailwind ici, il passe par postcss.config.js
export default defineConfig({
  plugins: [react()],
})
