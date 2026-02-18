import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rice-box-website/',
  preview: {
    allowedHosts: ['semisuccessfully-frustrative-eli.ngrok-free.dev', '.ngrok-free.dev']
  }
})
