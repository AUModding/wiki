// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://aumodding.dev",
	integrations: [
		starlight({
			title: 'Among Us Modding Wiki',
			logo: { src: './public/logo.png', alt: 'AU Modding Logo', replacesTitle: true },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AUModding/wiki' }],
			customCss: ['./src/styles/custom.css'],
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
