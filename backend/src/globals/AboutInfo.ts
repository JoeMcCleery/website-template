import type { GlobalConfig } from 'payload'

import { linkField } from '@/fields/link'

export const AboutInfo: GlobalConfig = {
  slug: 'about-info',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'locations',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'address',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'openingHours',
      type: 'array',
      fields: [
        {
          name: 'day(s)',
          type: 'text',
          required: true,
        },
        {
          name: 'times',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'phones',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'number',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'emails',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
      ],
    },
    {
      name: 'links',
      type: 'array',
      fields: [linkField({ appearances: false })],
      maxRows: 6,
    },
  ],
}
