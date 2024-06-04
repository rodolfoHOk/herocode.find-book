import { useCallback, useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import { Container } from '../../components/Container/Container'
import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'
import { Title } from '../../components/Title/Title'

const genderBooks = [
  'Ação',
  'Aventura',
  'Biografia',
  'Comédia',
  'Drama',
  'Ficção',
]

export function Home() {
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

          <Input placeholder="Eu gostaria de ler..." />
        </div>

        <Title title="Livros  recomendados" className="mt-16" />

        <div className="my-6 grid lg:grid-cols-2 gap-5">
          <Card id="1" />

          <Card id="2" />

          <Card id="3" />

          <Card id="4" />

          <Card id="5" />

          <Card id="6" />
        </div>
      </Container>
    </div>
  )
}
