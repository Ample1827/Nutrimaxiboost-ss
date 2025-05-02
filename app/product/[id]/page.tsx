import { getProductById, getAllProducts } from 'lib/api'; // Example import for fetching data
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // Safely get the product by ID
  const product = await getProductById(params.id);

  if (!product) {
    notFound(); // Redirects to the 404 page if the product is not found
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Other product details here */}
    </div>
  );
}

// Metadata generation for static pages
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
  };
}

// Static parameters generation for pre-rendering pages
export async function generateStaticParams() {
  // Fetch all products to generate paths
  const products = await getAllProducts();

  // Return an array of paths to be pre-rendered
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
