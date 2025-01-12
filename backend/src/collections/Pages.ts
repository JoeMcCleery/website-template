import type { CollectionConfig, FieldHook } from 'payload'

import { publishedOnly } from '@/access/publishedOnly'
import { FormBlock } from '@/blocks/Form'
import { slugField } from '@/fields/slug'
import { getUrl } from '@/utilities/getUrl'

const urlHook: FieldHook = ({ data, originalDoc }) => getUrl(data?.slug || originalDoc?.slug)

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
                afterRead: [urlHook],
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
