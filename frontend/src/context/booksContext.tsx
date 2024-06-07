import { ReactNode, createContext, useState } from 'react'

export type Book = {
  _id: string
  title: string
  isbn?: string
  pageCount?: number
  publishedDate?: Date
  thumbnailUrl: string
  shortDescription?: string
  longDescription: string
  status?: string
  authors: string[]
  categories: string[]
  score?: number
}

type BooksContextValues = {
  books: Book[]
  handleSetBooks: (books: Book[]) => void
}

export const BooksContext = createContext({} as BooksContextValues)

type BooksProviderProps = {
  children: ReactNode
}

export function BooksProvider({ children }: BooksProviderProps) {
  const [books, setBooks] = useState<Book[]>([])

  const handleSetBooks = (books: Book[]) => {
    setBooks(books)
  }

  return (
    <BooksContext.Provider value={{ books, handleSetBooks }}>
      {children}
    </BooksContext.Provider>
  )
}
