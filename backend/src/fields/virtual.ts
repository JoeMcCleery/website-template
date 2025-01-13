import { Field, FieldHook, deepMerge } from 'payload'

type VirtualFieldFactory = (name: string, hook: FieldHook, overrides?: Partial<Field>) => Field

export const virtualField: VirtualFieldFactory = (name, hook, overrides = {}) =>
  deepMerge(
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
