// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightLlmsMarkdown from 'starlight-llms-markdown';
import starlightAutoSidebar from 'starlight-auto-sidebar';

// https://astro.build/config
export default defineConfig({
	site: "https://aumodding.dev",
	integrations: [
		starlight({
			title: { 
				en: 'Among Us Modding Wiki',
				'zh-CN': 'AmongUs 模组维基',
				'ar': 'الويكي لمود Among Us' },
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				'zh-cn': { label: '简体中文', lang: 'zh-CN' },
				'ar': { label: 'العربية', lang: 'ar' },
			},
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
				ThemeSelect: './src/components/override/ThemeSelect.astro',
				PageTitle: './src/components/override/PageTitle.astro',
			},

			head: [
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
        },
        {
          tag: 'style',
          content: '@view-transition { navigation: auto; }'
        }
      ],
			plugins: [
				starlightLlmsMarkdown(),
				starlightAutoSidebar(),
				starlightSidebarTopics([
					{
						label: { en: 'Getting Started', 'zh-CN': '快速开始', 'ar' : 'البداية' },
						link: '/welcome',
						icon: 'information',
						items: ['welcome'],
					},
					{
						label: { en: 'Guides', 'zh-CN': '指南', 'ar': 'الإرشادات' },
						link: '/guides/',
						icon: 'open-book',
						items: [{ autogenerate: { directory: 'guides' } }],
					},
					{
						label: { en: 'Resources', 'zh-CN': '资源', 'ar': 'المصادر' },
						link: '/resources/',
						icon: 'document',
						items: [{ autogenerate: { directory: 'resources' } }],
					}
				]),
			],
		}),
	],
});
