import { forwardRef } from 'react'

type InputProps = {
  placeholder: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...rest }: InputProps, ref) => {
    return (
      <input
        ref={ref}
        className="w-full my-2 border-2 border-gray-200 rounded-xl p-2 outline-none shadow-md"
        placeholder={placeholder}
        {...rest}
      />
    )
  }
)
