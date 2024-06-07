import { useParams } from 'react-router-dom'
import { Card } from '../../components/Card/Card'
import { Container } from '../../components/Container/Container'
import { HeaderTitle } from '../../components/Header/HeaderTitle'
import { Title } from '../../components/Title/Title'
import { useContext, useEffect, useState } from 'react'
import { Book, BooksContext } from '../../context/booksContext'

export function BookDetails() {
  const { books } = useContext(BooksContext)
  const { id } = useParams()
  const [book, setBook] = useState<Book | null>(null)

  useEffect(() => {
    const findedBook = books.filter((book) => book._id === id)[0]
    setBook(findedBook)
  }, [id, books])

  return (
    <Container>
      <HeaderTitle />

      <div key={id} className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-16">
        <div>
          <h2 className="text-5xl font-bold text-evergreen">{book?.title}</h2>

          <p className="py-4 text-xl text-gray-500 font-light">
            {book?.authors.join(', ')}
          </p>

          <p className="text-gray-500 mt-6">
            {book?.longDescription
              ? book.longDescription
              : book?.shortDescription}
          </p>
        </div>

        <div>
          <img src={book?.thumbnailUrl} alt="" className="w-full rounded-lg" />
        </div>
      </div>

      <div>
        <Title title="Recomendações com base nesse livro" className="my-6" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {books.map((book) => (
            <Card key={book._id} id={book._id} book={book} />
          ))}
        </div>
      </div>
    </Container>
  )
}
