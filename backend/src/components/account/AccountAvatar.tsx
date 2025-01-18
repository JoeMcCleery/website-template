import { ServerComponentProps } from 'payload'

import { User } from '@common/payload-types'

import Avatar from '@/components/base/Avatar'

export default async function AccountAvatar({ user, payload }: ServerComponentProps) {
  let avatar = user.avatar as User['avatar']
  if (typeof avatar === 'number') {
    avatar = await payload.findByID({ collection: 'media', id: avatar })
  }
  const avatarUrl = avatar?.url ?? undefined

  return <Avatar avatarUrl={avatarUrl} fullName={user.fullName} />
}
