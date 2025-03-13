import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import react from '@vitejs/plugin-react-swc';


export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      compress: {
        quality: 80,  // Balance calidad/tamaño (0-100)
        webp: true,   // Genera versión .webp automáticamente
        avif: false   // Desactivado (aumenta tiempo de build)
      },
      include: ['**/*.{png,jpg,jpeg}']  // Solo aplica a estos formatos
    })
  ],
  build: {
    assetsInlineLimit: 4096,
    sourcemap: false, // 👈 Desactiva sourcemaps
  },
});
