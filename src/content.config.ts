import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { autoSidebarLoader } from 'starlight-auto-sidebar/loader';
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema';
import { z } from 'astro/zod';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(), 
		schema: docsSchema({ extend: z.object({ stars: z.boolean().default(false) })}),
	}),
	autoSidebar: defineCollection({
    	loader: autoSidebarLoader(),
    	schema: autoSidebarSchema(),
  	}),
};
