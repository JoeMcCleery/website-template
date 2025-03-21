import { DefaultServerCellComponentProps } from 'payload'
import BaseAvatar from '~/components/base/BaseAvatar'

export default async function AvatarCell({ rowData, payload }: DefaultServerCellComponentProps) {
  const user = await payload.findByID({ collection: 'users', id: rowData.id })

  return <BaseAvatar user={user} payload={payload} />
}
