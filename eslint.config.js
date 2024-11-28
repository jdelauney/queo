import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';

export default [
	{
		ignores: ['**/dist/**', '**/node_modules/**', '**/.turbo/**', '**/coverage/**', '**/.vscode/**'],
	},

	{
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},

		settings: {
			vue: {
				version: '3.5.13',
			},
		},
	},

	{
		files: ['**/*.ts', '**/*.tsx'],

		plugins: {
			'@typescript-eslint': typescriptPlugin,
		},

		languageOptions: {
			parser: tsParser,

			parserOptions: {
				ecmaVersion: 'latest',

				sourceType: 'module',
			},
		},

		rules: {
			...typescriptPlugin.configs['recommended'].rules,
		},
	},

	{
		files: ['**/*.vue'],

		languageOptions: {
			parser: await import('vue-eslint-parser'),

			parserOptions: {
				parser: {
					ts: tsParser,

					tsx: tsParser,

					js: tsParser,
				},

				extraFileExtensions: ['.vue'],

				ecmaVersion: 'latest',

				sourceType: 'module',
			},
		},

		plugins: {
			vue: pluginVue,
		},

		rules: {
			...pluginVue.configs['flat/recommended'].rules,
		},
	},

	eslintConfigPrettier,

	{
		plugins: {
			prettier,
		},

		rules: {
			'prettier/prettier': [
				'error',

				{
					useTabs: true,

					tabWidth: 4,
					endOfLine: 'crlf',
				},
			],
		},
	},
];
