import type { CollectionConfig, FieldHook } from 'payload'

import { publishedOnly } from '@/access/publishedOnly'
import { FormBlock } from '@/blocks/Form'
import { slugField } from '@/fields/slug'
import { virtualField } from '@/fields/virtual'
import { getAppURL } from '@/utilities/getURL'

const urlHook: FieldHook = ({ data, originalDoc }) => getAppURL(data?.slug || originalDoc?.slug)

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: publishedOnly,
  },
  admin: {
    defaultColumns: ['title', 'slug', '_status'],
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
            virtualField('url', urlHook),
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
