import { getProductById, getAllProducts } from "@/lib/products";
import { notFound } from "next/navigation";
import StoreLayout from "@/components/store-layout";
import ProductDetail from "@/components/product-detail";
import type { Metadata } from "next";

// ✅ Static paths for all product pages
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const products = await getAllProducts();
  return products.map((product: { id: string }) => ({
    id: product.id,
  }));
}

// ✅ Metadata per product
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

// ✅ Page component with correct typing
interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
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
