import { Brand } from 'src/brands/entities/brand.entity'
import { v7 as uuid } from 'uuid'

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: "Toyota",
    createAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: "Volvo",
    createAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: "Honda",
    createAt: new Date().getTime()
  }
]
