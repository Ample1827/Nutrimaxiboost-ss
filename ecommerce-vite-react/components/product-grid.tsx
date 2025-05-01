import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Product } from "@/lib/types"
import Image from "next/image"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Card className="overflow-hidden h-full transition-all hover:shadow-md">
            <div className="aspect-square relative bg-muted h-32 sm:h-36 md:h-40">
              <Image
                src={product.image || "/placeholder.svg?height=160&width=160"}
                alt={product.name}
                fill
                className="object-cover"
              />
              {product.badge && (
                <div className="absolute top-1 right-1 bg-primary text-primary-foreground text-xs font-medium px-1.5 py-0.5 rounded text-[10px]">
                  {product.badge}
                </div>
              )}
            </div>
            <CardContent className="p-2">
              <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
              <p className="text-xs text-muted-foreground">{product.category}</p>
            </CardContent>
            <CardFooter className="p-2 pt-0 flex justify-between items-center">
              <div>
                <p className="font-bold text-sm">MXN ${product.price.toFixed(2)}</p>
                {product.originalPrice && (
                  <p className="text-xs text-muted-foreground line-through">MXN ${product.originalPrice.toFixed(2)}</p>
                )}
              </div>
              {product.rating && (
                <div className="flex items-center text-xs">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{product.rating}</span>
                </div>
              )}
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
