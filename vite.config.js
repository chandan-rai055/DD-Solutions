import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-200-html',
      closeBundle() {
        const indexPath = path.resolve(__dirname, 'dist', 'index.html')
        const fallbackPath = path.resolve(__dirname, 'dist', '200.html')
        if (fs.existsSync(indexPath)) {
          fs.copyFileSync(indexPath, fallbackPath)
        }
      },
    },
  ],
})

