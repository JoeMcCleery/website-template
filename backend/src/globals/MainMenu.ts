import type { GlobalConfig } from 'payload'

import { linkField } from '@/fields/link'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [linkField({ appearances: false })],
      maxRows: 6,
    },
  ],
}
