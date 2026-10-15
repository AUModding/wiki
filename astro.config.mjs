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
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/AUModding/wiki' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/JcHncQVWa2' }
			],
			customCss: ['./src/styles/custom.css'],
			editLink: { baseUrl: "https://github.com/AUModding/wiki/tree/master/" },
			pagination: true,
			lastUpdated: true,
			components: {
				Sidebar: './src/components/override/Sidebar.astro',
				SiteTitle: './src/components/override/SiteTitle.astro',
				PageFrame: './src/components/override/PageFrame.astro',
			},

			head: [
				
				{
					tag: 'meta',
					attrs: {
						name: "og:site_name",
						content: "Among Us Modding Wiki"
					}
				},
				// <meta name="og:image" content="https://aumodding.dev/AUModders.logo.png" />
				{
					tag: 'meta',
					attrs: {
						name: "og:image",
						content: "https://aumodding.dev/AUModders.logo.png"
					}
				},
				// <meta name="theme-color" content="#a3d99f" />
				{
					tag: 'meta',
					attrs: {
						name: "theme-color",
						content: "#a3d99f"
					}
				},
				//<meta name="twitter:card" content="summary" />
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: "summary"
					}
				}],
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
					{
						label: 'Resources',
						link: '/resources/',
						icon: 'document',
						items: [{ autogenerate: { directory: 'resources' } }],
					}
				]),
			],
		}),
	],
});
