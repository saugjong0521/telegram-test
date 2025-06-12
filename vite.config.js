import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'f106-121-133-35-1.ngrok-free.app'  // 여기에 ngrok 주소
    ],
  },
});
