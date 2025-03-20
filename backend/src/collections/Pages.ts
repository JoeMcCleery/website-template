import type { CollectionConfig, FieldHook } from 'payload'

import { publishedOnly } from '@/access/publishedOnly'
import { FormBlock } from '@/blocks/Form'
import { slugField } from '@/fields/slug'
import { getPath } from '@/utilities/getUrl'

const pathHook: FieldHook = ({ data, originalDoc }) => getPath(data?.slug || originalDoc?.slug)

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: publishedOnly,
  },
  admin: {
    defaultColumns: ['title', 'path', '_status'],
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
              name: 'path',
              type: 'text',
              unique: true,
              admin: {
                readOnly: true,
              },
              hooks: {
                beforeValidate: [pathHook],
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
