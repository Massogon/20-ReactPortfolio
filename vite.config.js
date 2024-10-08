import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensure Vite binds to the correct host
    port: process.env.PORT || 3000, // Use Render's port or default to 3000
    open: true, // Automatically open the app
  },
});
