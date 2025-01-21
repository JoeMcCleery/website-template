import type { GlobalConfig } from 'payload'

export const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'settings',
          fields: [
            {
              name: 'websiteTitle',
              type: 'text',
              defaultValue: 'Website Template',
              required: true,
            },
            {
              name: 'homePage',
              type: 'relationship',
              maxDepth: 1,
              relationTo: ['pages'],
              required: true,
            },
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
      ],
    },
  ],
}
