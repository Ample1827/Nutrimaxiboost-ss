export interface Product {
  id: string
  name: string
  description: string
  longDescription?: string
  price: number
  originalPrice?: number
  image?: string
  category: string
  badge?: string
  rating?: number
  features?: string[]
}
