import type { CollectionConfig, FieldHook } from 'payload'

import { publishedOnly } from '@/access/publishedOnly'
import { FormBlock } from '@/blocks/Form'
import { slugField } from '@/fields/slug'
import { virtualField } from '@/fields/virtual'
import { getPath } from '@/utilities/getURL'

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
            virtualField('path', pathHook),
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
