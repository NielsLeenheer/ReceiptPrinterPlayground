import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

let external = [
  '@point-of-sale/receipt-printer-encoder', '@point-of-sale/webusb-receipt-printer', 
  '@point-of-sale/webserial-receipt-printer', '@point-of-sale/webbluetooth-receipt-printer'
]

export default defineConfig({
  base: "./",

  plugins: [
    svelte()
  ],

  server: {
    fs: {
      allow: ['..'],
    },
  },

  optimizeDeps: {
    exclude: external
  },

  build: {
    rollupOptions: {
      external
    }
  }
})
