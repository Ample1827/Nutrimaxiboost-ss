import { Suspense } from "react"
import { allProducts } from "@/lib/products"
import ProductGrid from "@/components/product-grid"
import { ProductFilter } from "@/components/product-filter"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Todos los Productos</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 flex-shrink-0">
          <ProductFilter />
        </div>

        <div className="flex-1">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid products={allProducts} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg p-2 space-y-2">
            <Skeleton className="h-32 sm:h-36 md:h-40 w-full rounded-md" />
            <Skeleton className="h-3 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
    </div>
  )
}
