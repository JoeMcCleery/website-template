'use client'

import { TextFieldClientProps } from 'payload'

import { useField, useFormFields } from '@payloadcms/ui'

import Icon from '@/components/base/Icon'
import { toIconName } from '@/utilities/toIconName'

export default function IconPreview({ path }: TextFieldClientProps) {
  const { value } = useField<string>({ path })
  const name = toIconName(value)
  const filledPath = path.substring(0, path.lastIndexOf('name')) + 'filled'
  const filled = useFormFields(([fields]) => fields[filledPath]).value as boolean

  return <Icon name={name} filled={filled} />
}
