"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PlusCircle, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"

type Product = {
  id: string
  name: string
  price: number
  image: string
  category: string
}

type ProductGridProps = {
  products: Product[]
  category: string
}

export default function ProductGrid({ products, category }: ProductGridProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative border rounded-lg overflow-hidden flex flex-col hover:border-store-bright-green transition-colors"
        >
          <Link href={`/product/${product.id}`} className="block aspect-square relative bg-muted">
            <Image
              src={product.image || "/images/whey.jpeg"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </Link>
          <div className="p-4 flex flex-col flex-grow">
            <Link href={`/product/${product.id}`}>
              <h3 className="font-medium text-lg hover:text-store-orange transition-colors">{product.name}</h3>
            </Link>
            <p className="text-xl font-bold mt-2 text-store-dark-green">MXN ${product.price.toFixed(2)}</p>
            <div className="mt-auto pt-4 grid grid-cols-2 gap-2">
              <Button
                onClick={() => handleAddToCart(product)}
                className="bg-store-orange hover:bg-store-bright-green text-white"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add
              </Button>
              <Link href={`/product/${product.id}`}>
                <Button variant="outline" className="w-full border-store-dark-green text-store-dark-green">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
