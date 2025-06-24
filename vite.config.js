import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'ea90-2405-201-3017-b045-917b-a5d7-6de5-7924.ngrok-free.app', // current ngrok subdomain
      /\.ngrok-free\.app$/ 
    ]
  }
})
