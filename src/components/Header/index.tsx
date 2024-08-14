import { HeaderBar, Links, LinkItem, LinkCar } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'
import Categories from '../../pages/Categories'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to={'/'}>
        <img src={logo} alt="eplay" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCar href="#">
      0 - produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCar>
  </HeaderBar>
)

export default Header
