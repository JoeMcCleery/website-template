import { getSeededColour } from '@/utilities/getSeededColour'

export default function Avatar({ avatarUrl, fullName }: { avatarUrl?: string; fullName?: string }) {
  const bg = getSeededColour(fullName ?? Math.random() * Math.PI)
  const initials = fullName
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
