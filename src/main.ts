import { ProductEntry, ProductCart } from './types'
import productData from '../data/products.json'
import StoreItem from './components/StoreItem'

const products: ProductEntry[] = productData as ProductEntry[]
products.map((item) => {
  StoreItem(item)
})


// const ProductList = document.querySelector<HTMLFormElement>('#productForm')
// const ProductList = document.querySelector<HTMLFormElement>('#productForm')
// let cart: ProductCart[] = []

// ProductList?.addEventListener('submit', e => {
//   e.preventDefault()
//   const title = ProductList['jaja'] as unknown as HTMLInputElement
//   console.log(title.value)
// })

