import clsx from 'clsx'

export default function Icon({ name, filled }: { name?: string; filled?: boolean }) {
  const classNames = clsx('material-symbols-rounded', { filled })

  return (
    <span className="icon-filled-hover">
      <span className={classNames}>{name}</span>
    </span>
  )
}
