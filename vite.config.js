import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// SINGLEFILE=1 npm run build  ->  erzeugt eine einzelne HTML-Datei (Vorschau/Weitergabe)
// npm run build               ->  normaler Produktions-Build (dist/)
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    ...(process.env.SINGLEFILE ? [viteSingleFile()] : []),
  ],
  build: {
    assetsInlineLimit: process.env.SINGLEFILE ? 100000000 : 4096,
  },
})
