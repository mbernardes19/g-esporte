import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        open: true
    },
    css: {
        modules: {
            scopeBehaviour: 'local',
            generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
    },
    resolve: {
        alias: {
            '@lib': '/src/lib',
            '@components': '/src/components',
            '@customTypes': '/src/types',
            '@mixins': '/src/styles/mixins'
        }
    }
})
