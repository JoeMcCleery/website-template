'use client'

import { TextFieldClientProps } from 'payload'

import { useField } from '@payloadcms/ui'

import Icon from '@/components/base/Icon'
import { toIconName } from '@/utilities/toIconName'

export default function IconPreview({ path }: TextFieldClientProps) {
  const { value } = useField<string>({ path })
  const name = toIconName(value)
  return <Icon name={name} />
}
