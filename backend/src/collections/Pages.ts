import type { CollectionConfig } from 'payload'

import { FormBlock } from '@/blocks/Form'
import { slugField } from '@/fields/slug'
import { publishedOnly } from '@/access/publishedOnly'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: publishedOnly,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            slugField(),
            {
              name: 'url',
              type: 'text',
              virtual: true,
              admin: {
                readOnly: true,
              },
              hooks: {
                afterRead: [
                  ({ data }) =>
                    `https://${process.env.DOMAIN_APP || 'localhost' + (data?.slug ? `/${data?.slug}` : '')}`,
                ],
              },
            },
          ],
          label: 'Meta',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [FormBlock],
              required: true,
            },
          ],
          label: 'Content',
        },
      ],
    },
  ],
  versions: {
    drafts: true,
  },
}
