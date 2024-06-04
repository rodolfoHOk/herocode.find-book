import classNames from 'classnames'

type TitleProps = {
  title: string
  className?: string
}

export function Title({ title, className }: TitleProps) {
  return (
    <div
      className={classNames([
        'w-fit md:text-5xl text-2xl text-evergreen font-bold border-b-4 border-b-evergreen-light',
        className,
      ])}
    >
      {title}
    </div>
  )
}
