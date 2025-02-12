import path from "path"
import { fileURLToPath } from 'url'
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import fs from 'fs'
import { resolve } from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), {
    name: 'copy-redirects',
    writeBundle() {
      fs.copyFileSync('public/_redirects', 'dist/_redirects');
    },
  }],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    outDir: 'dist',
  },
})
