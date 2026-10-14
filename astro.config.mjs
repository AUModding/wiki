// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "http://aumodding.github.io/",
	base: "/wiki",
	integrations: [
		starlight({
			title: 'Among Us Modding Wiki',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AUModding/wiki' }],
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
		}),
	],
});
