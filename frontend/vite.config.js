import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,
    hmr: {
      clientPort: 80, // This might be needed if you're facing HMR (Hot Module Replacement) issues
    },
  },
});
