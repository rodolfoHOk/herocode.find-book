type ButtonProps = {
  title: string
}

export function Button({ title }: ButtonProps) {
  return (
    <button className="bg-evergreen-light px-6 py-3 rounded-lg shadow text-white font-medium">
      {title}
    </button>
  )
}
