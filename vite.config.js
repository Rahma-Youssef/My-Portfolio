import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite"
import path from 'path' // مهم جدًا

export default defineConfig({
    plugins: [react(), tailwindcss(), flowbiteReact()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // base src
            'ui': path.resolve(__dirname, 'src/components/ui') // alias للمكونات
        },
    },
})