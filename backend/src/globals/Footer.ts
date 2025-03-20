import type { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'showAboutInfo',
      type: 'checkbox',
      defaultValue: true,
    },
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
  ],
}
