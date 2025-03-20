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
          label: 'Meta',
          fields: [
            {
              name: 'websiteTitle',
              type: 'text',
              defaultValue: 'Website Template',
              required: true,
            },
            {
              name: 'websiteIcon',
              type: 'upload',
              relationTo: 'media',
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
