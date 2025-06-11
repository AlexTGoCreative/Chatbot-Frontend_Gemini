import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/scan': {
        target: process.env.VITE_API2_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/scan/, '/scan'),
      },
      '/ask': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/ask/, '/ask'),
      },
    },
  }
  
});
