import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression2';
import fs from 'vite-plugin-fs';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress', exclude: [/\.(br)$ /, /\.(gz)$/],
    }),
    fs(),
    copy({
      targets: [
        { src: 'employees.json', dest: 'dist' }
      ],
      hook: 'writeBundle' // Ensures the copy occurs after the build
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.indexOf('node_modules') !== -1) {
            const basic = id.toString().split('node_modules/')[1];
            const sub1 = basic.split('/')[0];
            if (sub1 !== '.pnpm') {
              return sub1.toString();
            }
            const name2 = basic.split('/')[1];
            return name2.split('@')[name2[0] === '@' ? 1 : 0].toString();
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    }
  }
})
function ViteFS(): import("vite").PluginOption {
  throw new Error("Function not implemented.");
}

