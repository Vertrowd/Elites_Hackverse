import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/Elites_Hackverse/tree/main",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})