import type { GlobalConfig } from 'payload'

import { linkField } from '@/fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'links',
      type: 'array',
      fields: [linkField({ appearances: false })],
      maxRows: 6,
    },
  ],
}
