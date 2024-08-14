import ProductList from '../../components/ProductList'
import Game from '../../models/Games'
import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import fifa from '../../assets/images/fifa.png'
import star from '../../assets/images/star_wars.png'
import diablo from '../../assets/images/diablo.png'
import street from '../../assets/images/street.png'

const promocoes: Game[] = [
  {
    category: 'ação',
    system: 'windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00'],
    id: 1
  },
  {
    category: 'ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['5%', 'R$ 290,00'],
    id: 2
  },
  {
    category: 'ação',
    system: 'windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: fifa,
    title: 'FIFA 2024',
    infos: ['10%', 'R$ 250,00'],
    id: 3
  },
  {
    category: 'ação',
    system: 'PS%',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: fifa,
    title: 'FIFA 2024',
    infos: ['10%', 'R$ 250,00'],
    id: 4
  }
]

const emBreve: Game[] = [
  {
    category: 'RPG',
    system: 'windows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    title: 'Diablo 4',
    infos: ['17/05'],
    id: 5
  },
  {
    category: 'RPG',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: zelda,
    title: 'The Legend of Zelda - TOK',
    infos: ['10/08'],
    id: 6
  },
  {
    category: 'ação',
    system: 'Xbox Series S',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: star,
    title: 'Star Wars: Jedi Survivor',
    infos: ['04/07'],
    id: 7
  },
  {
    category: 'ação',
    system: 'windows',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: street,
    title: 'Street Fighter 6',
    infos: ['10%', 'R$ 250,00'],
    id: 8
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
