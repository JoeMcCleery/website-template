import { DefaultServerCellComponentProps } from 'payload'

import { User } from '@common/payload-types'

import BaseAvatar from '@/components/base/BaseAvatar'

export default async function AvatarCell({ rowData, payload }: DefaultServerCellComponentProps) {
  let avatar = rowData.avatar as User['avatar']
  if (typeof avatar === 'number') {
    avatar = await payload.findByID({ collection: 'media', id: avatar })
  }
  const avatarUrl = avatar?.url ?? undefined

  return <BaseAvatar avatarUrl={avatarUrl} fullName={rowData.fullName} />
}
