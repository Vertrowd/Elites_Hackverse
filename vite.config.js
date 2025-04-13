<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
>>>>>>> 7a88e9cd95f526755146bf4b3558b2b8f230432a

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
=======
})
>>>>>>> 7a88e9cd95f526755146bf4b3558b2b8f230432a
