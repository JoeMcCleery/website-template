import { Field, FieldHook } from 'payload'

import deepMerge from '@/utilities/deepMerge'

type Virtual = (name: string, hook: FieldHook, overrides?: Partial<Field>) => Field

export const virtualField: Virtual = (name, hook, overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name,
      type: 'text',
      virtual: true,
      admin: {
        readOnly: true,
      },
      hooks: {
        afterRead: [hook],
      },
    },
    overrides,
  )
