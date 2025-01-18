import clsx from 'clsx'

export default function Icon({ name, fill }: { name?: string; fill?: boolean }) {
  const classNames = clsx('material-symbols-rounded', { fill: fill })

  return (
    <div className="icon-fill-hover">
      <span className={classNames}>{name}</span>
    </div>
  )
}
