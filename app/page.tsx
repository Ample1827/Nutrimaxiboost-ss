import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import ProductGrid from "@/components/product-grid"
import { featuredProducts } from "@/lib/products"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Bienvenido a NutriMaxi Boost
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Productos premium de fitness para tu estilo de vida activo
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/products">
                <Button size="lg" className="mt-4">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Comprar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Productos Destacados</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Descubre nuestros productos de fitness más populares
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8">
            <ProductGrid products={featuredProducts} />
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/products">
              <Button variant="outline" size="lg">
                Ver Todos los Productos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 items-center justify-center">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Calidad Premium</h3>
              <p className="text-sm text-center text-muted-foreground">
                Todos nuestros productos están fabricados con materiales de la más alta calidad para mayor durabilidad y
                rendimiento.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Compra Segura</h3>
              <p className="text-sm text-center text-muted-foreground">
                Compra con confianza con nuestro procesamiento de pagos seguro y protección de datos.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-2 bg-primary/10 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Entrega Rápida</h3>
              <p className="text-sm text-center text-muted-foreground">
                Recibe tus productos de fitness rápidamente con nuestras opciones de envío acelerado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
