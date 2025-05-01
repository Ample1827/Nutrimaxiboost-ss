import { notFound } from "next/navigation"
import { allProducts } from "@/lib/products"
import ProductClient from "./ProductClient"

export function generateStaticParams() {
  return allProducts.map((product) => ({ id: product.id }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = allProducts.find((p) => p.id === params.id)

  if (!product) return notFound()

  return <ProductClient product={product} />
}
