import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import griffel from '@griffel/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    plugins: [react(), command === 'build' && griffel()],
}))
