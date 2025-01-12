import type { CollectionConfig, FieldHook } from 'payload'

import { virtualField } from '@/fields/virtual'

const fullNameHook: FieldHook = ({ data, originalDoc }) => {
  const firstName = data?.firstName || originalDoc?.firstName
  const secondName = data?.secondName || originalDoc?.secondName
  return `${firstName} ${secondName}`
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email'],
  },
  auth: true,
  fields: [
    // Email added by default
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'secondName',
      type: 'text',
      required: true,
    },
    virtualField('fullName', fullNameHook),
  ],
}
