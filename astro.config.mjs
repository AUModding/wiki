// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightLlmsMarkdown from 'starlight-llms-markdown';

// https://astro.build/config
export default defineConfig({
	site: "https://aumodding.dev",
	integrations: [
		starlight({
			title: 'Among Us Modding Wiki',
			logo: { src: './public/logo.png', alt: 'AU Modding Logo', replacesTitle: true },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AUModding/wiki' }, { icon: 'discord', label: 'Discord', href: 'https://discord.gg/JcHncQVWa2' }],
			customCss: ['./src/styles/custom.css'],
			editLink: { baseUrl: "https://github.com/AUModding/wiki/tree/master/" },
			pagination: true,
			lastUpdated: true,
			components: {
				Sidebar: './src/components/override/Sidebar.astro',
				SiteTitle: './src/components/override/SiteTitle.astro',
				PageFrame: './src/components/override/PageFrame.astro',
			},
			plugins: [
				starlightLlmsMarkdown(),
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
