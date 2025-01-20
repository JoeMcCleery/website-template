import { Payload } from 'payload'

import { User } from '@common/payload-types'

import { getSeededColour } from '@/utilities/getSeededColour'

export default async function BaseAvatar({ user, payload }: { user: User; payload: Payload }) {
  let avatar = user.avatar as User['avatar']
  if (typeof avatar === 'number') {
    avatar = await payload.findByID({ collection: 'media', id: avatar })
  }
  const avatarUrl = avatar?.url ?? undefined

  const bg = getSeededColour(user.id)
  const initials = user.fullName
    ?.split(' ')
    .map((name) => name[0])
    .join('')

  return (
    <div
      style={{
        width: 25,
        height: 25,
        borderRadius: '50%',
        backgroundColor: bg,
        display: 'grid',
        placeItems: 'center',
        overflow: 'hidden',
      }}
    >
      {avatarUrl ? (
        <img src={avatarUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  )
}
