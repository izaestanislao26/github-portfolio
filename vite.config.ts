import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site is served from /github-portfolio/
export default defineConfig({
  base: '/github-portfolio/',
  plugins: [react(), tailwindcss()],
})
