import { defineConfig } from 'vitepress';

export default defineConfig({
	lang: 'FR',
	title: 'Queo Composant Librairy',
	description: 'A VitePress Site',
	lastUpdated: true,
	themeConfig: {
		nav: [
			{ text: 'Guide', link: '/guide/getting-started' },
			{ text: 'Components', link: '/components/introduction' },
		],
		sidebar: {
			'/guide/': [
				{
					text: 'Introduction',
					items: [{ text: 'Getting Started', link: '/guide/getting-started' }],
				},
			],
			'/components/': [
				{
					text: 'Components',
					items: [
						{
							text: 'Button',
							items: [
								{ text: 'Overview', link: '/components/button/' },
								{ text: 'React Usage', link: '/components/button/react' },
								{ text: 'Vue Usage', link: '/components/button/vue' },
							],
						},
					],
				},
			],
		},
	},
});

