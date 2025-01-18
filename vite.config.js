import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        open: true
    },
    css: {
        modules: {
            generateScopedName: (name, filename) => {
                const file = filename
                    .split('/')
                    .pop()
                    .replace('.module.scss', '')
                return `${file}__${name}`
            }
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
