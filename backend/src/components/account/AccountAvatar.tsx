import { ServerComponentProps } from 'payload'
import BaseAvatar from '~/components/base/BaseAvatar'

export default async function AccountAvatar({ user, payload }: ServerComponentProps) {
  const currentUser = await payload.findByID({
    collection: 'users',
    id: user.id,
  })

  return <BaseAvatar user={currentUser} payload={payload} />
}
