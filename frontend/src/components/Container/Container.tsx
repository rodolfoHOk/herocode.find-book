import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 md:px-5 py-4">{children}</div>
  )
}
