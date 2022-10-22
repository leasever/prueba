export interface ProductEntry {
  _id: number
  name: string
  image: string[]
  description: string
  price: number
  rating: number
}

export interface Cart extends Pick<ProductEntry, '_id' > {
  quantity: number
  //------------------------------------------
  deleteItem?: (id:number) => void 
}

