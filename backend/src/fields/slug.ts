import type { Field, FieldHook } from 'payload'

import deepMerge from '@/utilities/deepMerge'
import { toSlug } from '@/utilities/toSlug'

type Slug = (overrides?: Partial<Field>) => Field

const beforeValidateHook: FieldHook = ({ value }) => {
  if (typeof value === 'string') {
    return toSlug(value)
  }

  return value
}

export const slugField: Slug = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
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
