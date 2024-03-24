import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/p3r-site-copy/',
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  build: {
    outDir: 'docs',
  },
});
