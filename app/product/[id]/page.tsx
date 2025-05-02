import { getProductById, getAllProducts } from "@/lib/products";
import { notFound } from "next/navigation";
import StoreLayout from "@/components/store-layout";
import ProductDetail from "@/components/product-detail";
import type { Metadata } from "next";

// ✅ Define the expected shape of route params
interface PageParams {
  params: {
    id: string;
  };
}

// ✅ Required for static export with dynamic route
export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product: { id: string }) => ({
    params: { id: product.id }, // ✅ Wrap id in `params` object
  }));
}

// ✅ Optional: Set dynamic page metadata
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
  };
}

// ✅ Page component with async data loading
export default async function ProductDetailPage({ params }: PageParams) {
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
