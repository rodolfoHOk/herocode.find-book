import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Tag } from '../Tag/Tag'
import { useCallback } from 'react'
import { Book } from '../../context/booksContext'

type CardProps = {
  id: string
  book: Book
}

export function Card({ id, book }: CardProps) {
  const navigate = useNavigate()

  const handleSelectBook = useCallback(() => {
    navigate(`/${id}`)
  }, [id, navigate])

  return (
    <div className="w-full max-w-lg h-fit p-4 flex flex-row gap-2 border border-gray-100 rounded-lg shadow-lg">
      <div className="w-48 h-full">
        <img src={book.thumbnailUrl} alt="" className="rounded-lg w-full" />
      </div>

      <div className="w-80 flex flex-col justify-between">
        <div>
          <p className="font-bold text-xl text-evergreen">{book.title}</p>

          <p className="font-light text-lg text-gray-500 mb-2">
            {book.authors.join(', ')}
          </p>

          {book.categories.map((category) => (
            <Tag title={category} className="mb-3" />
          ))}
        </div>

        {book.shortDescription && (
          <p className="mb-3 text-base">
            <strong>Sinopse:</strong> {book.shortDescription}
          </p>
        )}

        <Button
          title="Ver mais"
          variant="outlined"
          className="py-1 w-1/2"
          onClick={handleSelectBook}
        />
      </div>
    </div>
  )
}
