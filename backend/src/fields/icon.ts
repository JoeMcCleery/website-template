import { Field, FieldHook, OptionObject, deepMerge } from 'payload'

import { toIconName } from '@/utilities/toIconName'

type IconFieldFactory = (options?: {
  allowNone?: boolean
  positions?: false | IconPosition[]
  overrides?: Partial<Field>
}) => Field

type IconType = 'none' | 'icon' | 'media'

type IconPosition = 'before' | 'after'

const typeOptions: Record<IconType, OptionObject> = {
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

const beforeValidateIconNameHook: FieldHook = ({ value }) => {
  if (typeof value === 'string') {
    return toIconName(value)
  }

  return value
}

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
    interfaceName: 'Icon',
    admin: {
      hideGutter: true,
      components: {
        Field: '/components/fields/IconField.tsx',
      },
    },
    fields: [
      {
        name: 'type',
        type: 'radio',
        defaultValue: typeOptionsToUse[0].value,
        options: typeOptionsToUse,
      },
      {
        name: 'filled',
        type: 'checkbox',
      },
      {
        name: 'name',
        type: 'text',
        hooks: {
          beforeValidate: [beforeValidateIconNameHook],
        },
      },
      {
        name: 'media',
        type: 'upload',
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
      defaultValue: positionOptionsToUse[0].value,
      options: positionOptionsToUse,
    })
  }

  return deepMerge(iconResult, overrides)
}
