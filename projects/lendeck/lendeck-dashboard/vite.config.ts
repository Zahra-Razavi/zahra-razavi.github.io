
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'lucide-react@0.487.0': 'lucide-react',
        'figma:asset/f2fe05f5b76b8820ba5574dd2991ee750aa771e2.png': path.resolve(__dirname, './src/assets/f2fe05f5b76b8820ba5574dd2991ee750aa771e2.png'),
        'figma:asset/df80ee288523e05f56f033f916c0ea5c88229f7b.png': path.resolve(__dirname, './src/assets/df80ee288523e05f56f033f916c0ea5c88229f7b.png'),
        'figma:asset/cb7cd93eb961ad5555d784f3a56f51b30cf3587f.png': path.resolve(__dirname, './src/assets/cb7cd93eb961ad5555d784f3a56f51b30cf3587f.png'),
        'figma:asset/babc137d4431d4814a91a194f935f819e6f7188e.png': path.resolve(__dirname, './src/assets/babc137d4431d4814a91a194f935f819e6f7188e.png'),
        'figma:asset/9bba46a15e367b115d981444bf2378290eb679a8.png': path.resolve(__dirname, './src/assets/9bba46a15e367b115d981444bf2378290eb679a8.png'),
        'figma:asset/80d7a781f6d1caf9e82f6888b613fb1c8146ceef.png': path.resolve(__dirname, './src/assets/80d7a781f6d1caf9e82f6888b613fb1c8146ceef.png'),
        'figma:asset/8055a7db5b18b5076e7ebd1ee93be05627a442e5.png': path.resolve(__dirname, './src/assets/8055a7db5b18b5076e7ebd1ee93be05627a442e5.png'),
        'figma:asset/7a50e2831ecaf414bfcadf54b1f8d8c2d4801b5f.png': path.resolve(__dirname, './src/assets/7a50e2831ecaf414bfcadf54b1f8d8c2d4801b5f.png'),
        'figma:asset/66a098a587e43422a0742d861483c4fe736874a9.png': path.resolve(__dirname, './src/assets/66a098a587e43422a0742d861483c4fe736874a9.png'),
        'figma:asset/663b6f47b8a3d2b40bdb6becca43f9f1754453e3.png': path.resolve(__dirname, './src/assets/663b6f47b8a3d2b40bdb6becca43f9f1754453e3.png'),
        'figma:asset/51b527652ecc2f3ab06d57d1085d40cfc85a41f8.png': path.resolve(__dirname, './src/assets/51b527652ecc2f3ab06d57d1085d40cfc85a41f8.png'),
        'figma:asset/45ab393c30d4d2d683e5a112f7211afda1310566.png': path.resolve(__dirname, './src/assets/45ab393c30d4d2d683e5a112f7211afda1310566.png'),
        'figma:asset/2e9df8c8ccaa0e6460167a95aa9daa0fefcd701a.png': path.resolve(__dirname, './src/assets/2e9df8c8ccaa0e6460167a95aa9daa0fefcd701a.png'),
        'figma:asset/04acb4fa386b7bcad60cde753df4023c65718ad0.png': path.resolve(__dirname, './src/assets/04acb4fa386b7bcad60cde753df4023c65718ad0.png'),
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });
