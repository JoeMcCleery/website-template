import type { CollectionConfig } from 'payload'

import { FormBlock } from '../../blocks/Form'
import { slugField } from '../../fields/slug'
import { publishedOnly } from './access/publishedOnly'

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
