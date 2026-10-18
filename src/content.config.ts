import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z as zod } from 'astro/zod';
import { autoSidebarLoader } from 'starlight-auto-sidebar/loader';
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({ extend: zod.object({ stars: zod.boolean().default(true), author: zod.string().optional(), translator: zod.string().optional() }) }),
	}),
	autoSidebar: defineCollection({
		loader: autoSidebarLoader(),
		schema: autoSidebarSchema(),
	}),
	i18n: defineCollection({
		loader: i18nLoader(),
		schema: i18nSchema({
			extend: zod.object({
				'nav.gettingStarted': zod.string().optional(),
				'nav.resources': zod.string().optional(),
				'tag.writtenBy': zod.string().optional(),
				'tag.translatedBy': zod.string().optional(),
				'settings.toggleTheme': zod.string().optional(),
				'settings.toggleSidebar': zod.string().optional(),
				'settings.toggleStars': zod.string().optional(),
				'inner.disclaimer.line1': zod.string().optional(),
				'inner.disclaimer.line2': zod.string().optional(),
			}),
		}),
	}),
};
