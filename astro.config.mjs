// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsMarkdown from 'starlight-llms-markdown';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	site: "https://aumodding.dev",
	integrations: [
		starlight({
      title: 'Among Us Modding Wiki',
			description: 'Documentation for Among Us modding.',
			logo: { src: './public/logo.png', alt: 'AU Modding Logo', replacesTitle: true },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AUModding/wiki' }],
			customCss: ['./src/styles/custom.css'],
			plugins: [starlightLlmsMarkdown()],
			sidebar: [
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
      ],
			editLink: { baseUrl: "https://github.com/AUModding/wiki/tree/master/" },
			pagination: true,
			lastUpdated: true,
			components: {
				Sidebar: './src/components/override/Sidebar.astro',
			},
			plugins: [
				starlightSidebarTopics([
					{
						label: 'Getting Started',
						link: '/welcome',
						icon: 'information',
						items: ['welcome'],
					},
					{
						label: 'Guides',
						link: '/guides/',
						icon: 'open-book',
						items: [{ autogenerate: { directory: 'guides' } }],
					},
				]),
			],
		}),
	],
});
