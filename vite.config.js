import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@mui/core': '@mui/core@5.0.0-alpha.54',
      '@mui/lab': '@mui/lab@5.0.0-alpha.57',
    },
  },
});