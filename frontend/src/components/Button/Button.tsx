import classNames from 'classnames'

type ButtonProps = {
  className?: string
  title: string
  variant?: 'filled' | 'outlined'
  onClick?: (title: string) => void
}

export function Button({
  className,
  title,
  variant = 'filled',
  onClick,
}: ButtonProps) {
  return (
    <button
      className={classNames([
        'py-3 font-medium rounded-lg shadow border-2 border-evergreen-light',
        variant === 'filled' && 'bg-evergreen-light text-white',
        variant === 'outlined' && 'bg-white  text-evergreen-light',
        className,
      ])}
      onClick={onClick ? () => onClick(title) : () => {}}
    >
      {title}
    </button>
  )
}
