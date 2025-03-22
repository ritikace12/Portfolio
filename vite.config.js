import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/portgas-a/dist/**/*.js" // 👈 Allow scanning your library's styles
],
  plugins: [react(),tailwindcss(),],
})
