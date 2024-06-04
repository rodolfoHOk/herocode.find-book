import { Container } from '../Container/Container'
import { HeaderTitle } from './HeaderTitle'
import { Button } from '../Button/Button'
import backgroundImage from '../../assets/images/background-header.png'

export function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      className="w-auto bg-cover bg-center bg-no-repeat"
    >
      <Container>
        <HeaderTitle />

        <div className="mt-28">
          <p className="md:text-7xl text-3xl font-bold text-evergreen">
            Encontre livros <br /> que seja a sua cara!
          </p>

          <p className="text-gray-500 mt-5 mb-8 text-xl">Lorem ipsum</p>

          <Button title="Pesquisar livros" className="px-6" />
        </div>
      </Container>
    </header>
  )
}
