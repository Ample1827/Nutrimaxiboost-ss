import ProductPageClient from "./ProductPageClient"
import { allProducts } from "@/lib/products"

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = allProducts.find((p) => p.id === params.id)

  if (!product) {
    return <div className="container py-12 text-center">Producto no encontrado</div>
  }

  return <ProductPageClient product={product} />
}
