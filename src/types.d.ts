export interface ProductEntry {
  _id: number
  name: string
  image: string[]
  description: string
  price: number
  rating: number
  quantity?: number
}

export type ProductCart = Pick<ProductEntry, 'name' | 'image' | 'price' | 'quantity'>
