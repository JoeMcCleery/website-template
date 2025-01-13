import { Field, Option, OptionObject, deepMerge } from 'payload'

type IconFieldFactory = (options?: {
  allowNone?: boolean
  positions?: false | IconPosition[]
  overrides?: Partial<Field>
}) => Field

type IconType = 'none' | 'icon' | 'media'

type IconPosition = 'before' | 'after'

const typeOptions: Record<IconType, Option> = {
  none: {
    label: 'None',
    value: 'none',
  },
  icon: {
    label: 'Icon',
    value: 'icon',
  },
  media: {
    label: 'Media',
    value: 'media',
  },
}

const positionOptions: Record<IconPosition, OptionObject> = {
  before: {
    label: 'Before',
    value: 'before',
  },
  after: {
    label: 'After',
    value: 'after',
  },
}

const iconOptions: Option[] = [
  {
    label: 'Hello',
    value: 'hello',
  },
  {
    label: 'World',
    value: 'world',
  },
]

export const iconField: IconFieldFactory = ({
  allowNone = false,
  positions,
  overrides = {},
} = {}) => {
  let typeOptionsToUse = Object.values(typeOptions)

  if (!allowNone) {
    typeOptionsToUse = Object.entries(typeOptions)
      .filter(([type, _]) => type !== 'none')
      .map(([_, option]) => option)
  }

  const iconResult: Field = {
    name: 'icon',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        name: 'type',
        type: 'radio',
        admin: { layout: 'horizontal' },
        defaultValue: () => (allowNone ? 'none' : 'icon'),
        options: typeOptionsToUse,
      },
      {
        name: 'icon',
        type: 'select',
        admin: { condition: (_, siblingData) => siblingData?.type === 'icon' },
        options: iconOptions,
      },
      {
        name: 'media',
        type: 'upload',
        admin: {
          condition: (_, siblingData) => siblingData?.type === 'media',
        },
        relationTo: 'media',
      },
    ],
  }

  if (positions != false) {
    let positionOptionsToUse = Object.values(positionOptions)

    if (positions) {
      positionOptionsToUse = positions.map((position) => positionOptions[position])
    }

    iconResult.fields.push({
      name: 'position',
      type: 'radio',
      admin: {
        condition: (_, siblingData) => siblingData?.type !== 'none',
        layout: 'horizontal',
      },
      defaultValue: positionOptionsToUse[0].value,
      options: positionOptionsToUse,
    })
  }

  return deepMerge(iconResult, overrides)
}
