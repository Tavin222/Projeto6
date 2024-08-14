import { sys } from "typescript"

class Game {
  category: string
  system: string
  description: string
  image: string
  title: string
  infos: string[]
  id: number

  constructor(
    category: string,
    system: string,
    description: string,
    image: string,
    title: string,
    infos: string[],
    id: number
  ) {
    this.id = id
    this.category = category
    this.system = system
    this.image = image
    this.description = description
    this.title = title
    this.infos = infos
  }
}

export default Game
