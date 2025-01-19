import clsx from 'clsx'

export default function Icon({
  name,
  filled = false,
  size = '24px',
}: {
  name?: string
  filled?: boolean
  size?: string
}) {
  const classNames = clsx('material-symbols-rounded', { filled })

  return (
    <span className={classNames} style={{ fontSize: size }}>
      {name}
    </span>
  )
}
