import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Tag } from '../Tag/Tag'
import { useCallback } from 'react'

type CardProps = {
  id: string
}

export function Card({ id }: CardProps) {
  const navigate = useNavigate()

  const handleSelectBook = useCallback(() => {
    navigate(`/${id}`)
  }, [id, navigate])

  return (
    <div className="w-full max-w-lg p-4 flex flex-row gap-2 border border-gray-100 rounded-lg shadow-lg">
      <div className="w-48 h-full flex items-center">
        <img
          src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg"
          alt=""
          className="rounded-lg w-full"
        />
      </div>

      <div className="w-80">
        <p className="font-bold text-2xl text-evergreen">Codigo limpo</p>

        <p className="font-light text-lg text-gray-500 mb-2">Autor</p>

        <Tag title="Comédia" className="mb-3" />

        <p className="mb-3">
          <strong>Sinopse:</strong> lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Cras ullamcorper erat faucibus justo luctus gravida.
          In hac habitasse platea dictumst. Curabitur at massa vel nulla
          pulvinar dignissim
        </p>

        <Button
          title="Ver mais"
          variant="outlined"
          className="py-1.5 w-1/2"
          onClick={handleSelectBook}
        />
      </div>
    </div>
  )
}
