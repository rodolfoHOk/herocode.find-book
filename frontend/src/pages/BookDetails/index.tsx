import { useParams } from 'react-router-dom'
import { Card } from '../../components/Card/Card'
import { Container } from '../../components/Container/Container'
import { HeaderTitle } from '../../components/Header/HeaderTitle'
import { Title } from '../../components/Title/Title'

export function BookDetails() {
  const { id } = useParams()

  return (
    <Container>
      <HeaderTitle />

      <div key={id} className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-16">
        <div>
          <h2 className="text-5xl font-bold text-evergreen">Nome do livro</h2>

          <p className="py-4 text-xl text-gray-500 font-light">Autor</p>

          <p className="text-gray-500 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
            magna mollis, volutpat metus ut, convallis nisi. Sed vel neque
            scelerisque, pretium magna vel, tempus massa. Phasellus vel erat a
            orci egestas ultricies non in erat. Curabitur sodales et enim in
            rutrum. Nunc tortor nunc, posuere eget convallis non, posuere vel
            libero. Quisque tempus feugiat auctor. Pellentesque in libero leo.
            Cras dui libero, posuere eu maximus et, sollicitudin eu quam. Fusce
            dapibus arcu nec justo accumsan lobortis. Cras velit mauris, varius
            ac tellus eget, tincidunt sagittis orci. Integer ullamcorper
            consectetur eros ac gravida. Cras blandit eros venenatis massa
            sodales, id pretium leo suscipit. Vivamus id lectus id lorem ornare
            aliquet eget nec eros. Maecenas et fermentum risus, ac interdum
            arcu. In odio erat, blandit vitae metus nec, fermentum porta lectus.
          </p>
        </div>

        <div>
          <img
            src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <div>
        <Title title="Recomendações com base nesse livro" className="my-6" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Card id="1" />

          <Card id="2" />

          <Card id="3" />

          <Card id="4" />
        </div>
      </div>
    </Container>
  )
}
