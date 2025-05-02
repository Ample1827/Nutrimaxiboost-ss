// app/product/[id]/page.tsx
import { getProductById, getAllProducts } from "@/lib/products"
import { notFound } from "next/navigation"
import StoreLayout from "@/components/store-layout"
import ProductDetail from "@/components/product-detail"

export async function generateStaticParams() {
  const products = getAllProducts() // Should return an array of all products
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <StoreLayout>
      <ProductDetail product={product} />
    </StoreLayout>
  )
}
