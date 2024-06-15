export type Root = Root2[]

export interface Root2 {
  id: number
  title: string
  price: number
  description: string
  gender: string
  featured: boolean
  image: string
  sizes: string[]
  colors: string[]
  stock: boolean
  cantStock: number
}
