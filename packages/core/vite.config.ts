import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		dts({
			include: ['src/**/*.ts'],
			outDir: 'dist/types',
		}),
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'taylux',
		},
		rollupOptions: {
			input: resolve(__dirname, 'src/styles/main.scss'),
			output: {
				assetFileNames: 'assets/[name][extname]',
			},
		},
		sourcemap: false,
		minify: true,
		cssCodeSplit: false,
	},
});
