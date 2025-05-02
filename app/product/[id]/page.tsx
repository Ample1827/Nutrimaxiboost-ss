import { getProductById } from "@/lib/products"
import { notFound } from "next/navigation"
import StoreLayout from "@/components/store-layout"
import ProductDetail from "@/components/product-detail"
import type { Metadata } from "next"

// Optional: Set dynamic page metadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProductById(params.id)
  if (!product) return {}

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <StoreLayout>
      <ProductDetail product={product} />
    </StoreLayout>
  )
}
