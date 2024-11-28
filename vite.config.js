import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // Note the correct package name

export default defineConfig({
  plugins: [react()],
  base: '/Vignesh-Seetharaman/'
})
