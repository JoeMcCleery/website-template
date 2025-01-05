import type { GlobalConfig } from 'payload'

export const Meta: GlobalConfig = {
  slug: 'meta',
  access: {
    read: () => true,
  },
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
}
