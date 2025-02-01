import { Field, Option, deepMerge } from 'payload'

import { iconField } from '@/fields/icon'

type LinkFieldFactory = (options?: {
  appearances?: false | LinkAppearance[]
  overrides?: Partial<Field>
}) => Field

export type LinkAppearance = 'default' | 'button'

export const appearanceOptions: Record<LinkAppearance, Option> = {
  default: {
    label: 'Default',
    value: 'default',
  },
  button: {
    label: 'Button',
    value: 'button',
  },
}

export const linkField: LinkFieldFactory = ({ appearances, overrides = {} } = {}) => {
  const appearanceFields: Field[] = [iconField({ allowNone: true })]

  if (appearances !== false) {
    let appearanceOptionsToUse = Object.values(appearanceOptions)

    if (appearances) {
      appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance])
    }

    appearanceFields.push({
      name: 'appearance',
      type: 'select',
      admin: {
        description: 'Choose how the link should be rendered.',
      },
      defaultValue: 'default',
      options: appearanceOptionsToUse,
    })
  }

  const linkResult: Field = {
    name: 'link',
    type: 'group',
    interfaceName: 'link',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: [
              {
                label: 'Internal link',
                value: 'reference',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
          },
          {
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: 'Open in new tab',
          },
        ],
      },
      {
        type: 'row',
        fields: [
          {
            name: 'reference',
            type: 'relationship',
            admin: {
              condition: (_, siblingData) => siblingData?.type === 'reference',
              width: '50%',
            },
            label: 'Page',
            maxDepth: 1,
            relationTo: ['pages'],
            required: true,
          },
          {
            name: 'url',
            type: 'text',
            admin: {
              condition: (_, siblingData) => siblingData?.type === 'custom',
              width: '50%',
            },
            label: 'Custom URL',
            required: true,
          },
          {
            name: 'label',
            type: 'text',
            admin: {
              width: '50%',
            },
            label: 'Label',
          },
        ],
      },
      {
        type: 'collapsible',
        label: 'Appearance',
        admin: {
          initCollapsed: true,
        },
        fields: appearanceFields,
      },
    ],
  }

  return deepMerge(linkResult, overrides)
}
