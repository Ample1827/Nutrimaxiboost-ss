import type { Metadata } from "next";
import { getProductById } from "@/lib/products";
import { notFound } from "next/navigation";
import StoreLayout from "@/components/store-layout";
import ProductDetail from "@/components/product-detail";

// 1. Generate static paths
export async function generateStaticParams() {
  return Array.from({ length: 25 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}


// 2. Metadata — must be synchronous unless fetching
export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  return {
    title: `Product ${params.id}`,
    description: `Details for product ${params.id}`,
  };
}


// 3. Page component
export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <StoreLayout>
      <ProductDetail product={product} />
    </StoreLayout>
  );
}
