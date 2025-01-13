import { Field, FieldHook, deepMerge } from 'payload'

type VirtualFieldFactory = (options?: {
  name?: string
  hook?: FieldHook
  overrides?: Partial<Field>
}) => Field

export const virtualField: VirtualFieldFactory = ({
  name = 'virtual',
  hook = () => 'value',
  overrides = {},
} = {}) =>
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
