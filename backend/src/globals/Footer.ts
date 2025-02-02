import type { GlobalConfig } from 'payload'

import { linkField } from '@/fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'copyright',
      type: 'group',
      fields: [
        {
          name: 'showCopyright',
          type: 'checkbox',
          defaultValue: true,
          required: true,
        },
        {
          name: 'entity',
          type: 'text',
          defaultValue: 'Fear Indigo',
          admin: {
            condition: (_, { showCopyright }) => Boolean(showCopyright),
          },
        },
      ],
    },
    {
      name: 'showMadeByLink',
      type: 'checkbox',
      defaultValue: true,
      required: true,
    },
    {
      name: 'links',
      type: 'array',
      fields: [linkField({ appearances: false })],
      maxRows: 6,
    },
  ],
}
