import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		react(),
		dts({
			include: ['src/**/*.ts', 'src/**/*.tsx'],
			outDir: 'dist/types',
			cleanVueFileName: true,
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			fileName: (format) => `queo.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', '@queo/core'],
			output: [
				{
					format: 'es',
					exports: 'named',
					globals: {
						react: 'React',
						'react-dom': 'ReactDOM',
						'@queo/core': 'QueoCore',
					},
					assetFileNames: 'assets/[name][extname]',
				},
				{
					format: 'umd',
					name: 'queo',
					exports: 'named',
					globals: {
						react: 'React',
						'react-dom': 'ReactDOM',
						'@queo/core': 'QueoCore',
					},
					assetFileNames: 'assets/[name][extname]',
				},
			],
		},
		sourcemap: false,
		minify: true,
		cssCodeSplit: false,
		cssMinify: true,
		reportCompressedSize: true,
		chunkSizeWarningLimit: 1000,
	},
});
