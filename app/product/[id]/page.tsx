import { getProductById } from "@/lib/products"
import { notFound } from "next/navigation"
import StoreLayout from "@/components/store-layout"
import ProductDetail from "@/components/product-detail"

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
