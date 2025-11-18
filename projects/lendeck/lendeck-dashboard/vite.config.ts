
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/Lendeck/demo/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: path.resolve(__dirname, '../../../Lendeck/demo'),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
