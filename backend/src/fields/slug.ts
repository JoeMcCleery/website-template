import { toSlug } from 'common/utilities/toSlug'
import { Field, FieldHook, deepMerge } from 'payload'

type SlugFieldFactory = (overrides?: Partial<Field>) => Field

const beforeValidateHook: FieldHook = ({ value }) => {
  if (typeof value === 'string') {
    return toSlug(value)
  }

  return value
}

export const slugField: SlugFieldFactory = (overrides = {}) =>
  deepMerge(
    {
      name: 'slug',
      type: 'text',
      hooks: {
        beforeValidate: [beforeValidateHook],
      },
      index: true,
      label: 'Slug',
    },
    overrides,
  )
