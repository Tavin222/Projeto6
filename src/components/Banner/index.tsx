import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'
import Tag from '../Tag'
import { Imagem, Precos, Titulo } from './styles'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvels Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span>
          <br />
          por apenas R$ 99,90
        </Precos>
      </div>
      <Button type="link" to="/produto" title="Clique aqui">
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
