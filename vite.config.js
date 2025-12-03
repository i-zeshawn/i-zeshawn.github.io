import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // base: "/Portfolio/"
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'three': ['three', '@react-three/fiber', '@react-three/drei'],
                    'motion': ['framer-motion'],
                    'vendor': ['react', 'react-dom', 'react-router-dom']
                }
            }
        },
        chunkSizeWarningLimit: 1000,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'three', 'framer-motion']
    }
})
