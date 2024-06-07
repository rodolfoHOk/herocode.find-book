import { useCallback, useContext, useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import { Container } from '../../components/Container/Container'
import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'
import { Title } from '../../components/Title/Title'
import { searchBooks } from '../../services/books'
import { BooksContext } from '../../context/booksContext'

const genderBooks = [
  'Ação',
  'Aventura',
  'Biografia',
  'Comédia',
  'Drama',
  'Ficção',
]

export function Home() {
  const { books, handleSetBooks } = useContext(BooksContext)
  const [selectedGender, setSelectedGender] = useState<string[]>([])

  const handleSelected = useCallback(
    (title: string) => {
      if (selectedGender.includes(title)) {
        const removeGender = selectedGender.filter((item) => item !== title)
        setSelectedGender(removeGender)
      } else {
        setSelectedGender([...selectedGender, title])
      }
    },
    [selectedGender]
  )

  const handleSubmit = useCallback(
    async (search: string) => {
      const response = await searchBooks(search)
      handleSetBooks(response)
    },
    [handleSetBooks]
  )

  return (
    <div className="mb-6">
      <Header />

      <Container>
        <Title title="O que você quer ler hoje?" className="mt-4" />

        <div className="my-9 grid grid-cols-4 lg:grid-cols-8 gap-8">
          {genderBooks.map((book, index) => (
            <Button
              key={index}
              title={book}
              variant={selectedGender.includes(book) ? 'filled' : 'outlined'}
              onClick={handleSelected}
            />
          ))}
        </div>

        <div className="space-y-7">
          <p className="text-evergreen font-semibold text-2xl">
            Sobre o que você gostaria de receber uma recomendação de livro?
          </p>

          <Input
            placeholder="Eu gostaria de ler..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e.currentTarget.value)
              }
            }}
          />
        </div>

        <Title title="Livros  recomendados" className="mt-16" />

        <div className="my-6 grid lg:grid-cols-2 gap-5">
          {books.map((book) => (
            <Card key={book._id} id={book._id} book={book} />
          ))}
        </div>
      </Container>
    </div>
  )
}
