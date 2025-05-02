import { getProductById, getAllProducts } from "@/lib/products";
import { notFound } from "next/navigation";
import StoreLayout from "@/components/store-layout";
import ProductDetail from "@/components/product-detail";
import type { Metadata } from "next";

// Static paths
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product: { id: string }) => ({
    id: product.id,
  }));
}

// Metadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

// ✅ Page component (final fix)
export default async function ProductDetailPage(props: { params: { id: string } }) {
  const { params } = props;
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
