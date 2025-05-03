import Image from "next/image"
import Link from "next/link"
import StoreLayout from "@/components/store-layout"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, TrendingUp, ShieldCheck, Truck, Clock } from "lucide-react"
import { prefix } from "@/lib/prefix"; // adjust path as needed



// Top selling products data
const topSellingProducts = [
  {
    id: "1",
    name: "Proteína Gold Standard 100% Whey",
    price: 1781.62 ,
    image: `${prefix}/images/whey.jpeg`,
    category: "featured",
    rating: 4.8,
    sales: 1245,
  },
  {
    id: "8",
    name: "Homodeus Neuro Shield Platinum - 60 Cápsulas",
    price: 849.00,
    image: `${prefix}/images/id8.jpg`,
    category: "electronics",
    rating: 4.9,
    sales: 982,
  },
  {
    id: "14",
    name: "Morama | Mezcla para Hotcakes con Proteína",
    price: 139.00,
    image: `${prefix}/images/id14.jpg`,
    category: "home",
    rating: 4.7,
    sales: 876,
  },
  {
    id: "3",
    name: "Birdman Falcon Performance Proteína Premium",
    price: 917.99,
    image: `${prefix}/images/id3.jpg`,
    category: "featured",
    rating: 4.6,
    sales: 754,
  },
  {
    id: "17",
    name: "CLA | Suplemento de Ácido Linoleico Conjugado",
    price: 329.00,
    image: `${prefix}/images/id17.jpg`,
    category: "accessories",
    rating: 4.5,
    sales: 689,
  },
]

// Featured products data
const featuredProducts = [
  {
    id: "1",
    name: "Premium Proteína Gold Standard 100% Whey",
    price: 1781.62,
    image: `${prefix}/images/whey.jpeg`,
    category: "featured",
  },
  {
    id: "2",
    name: "Optimum Nutrition 100% Casein",
    price: 1799.99,
    image: `${prefix}/images/id2.jpg`,
    category: "featured",
  },
  {
    id: "3",
    name: "Birdman Falcon Performance Proteína Premium",
    price: 917.99,
    image: `${prefix}/images/id3.jpg`,
    category: "featured",
  },
  {
    id: "4",
    name: "Birdman Falcon Protein Proteína",
    price: 899.99,
    image: `${prefix}/images/id4.jpg`,
    category: "featured",
  },
  {
    id: "5",
    name: "MuscleMeds Carnivor Proteína de Carne - Sabor Chocolate 2716g",
    price: 1199.99,
    image: `${prefix}/images/id5.jpg`,
    category: "featured",
  },
]

// Electronics products data
const electronicsProducts = [
  {
    id: "6",
    name: "Omega 3 - B Life Company (90 Capletas)",
    price: 499.00,
    image: `${prefix}/images/id6.jpg`,
    category: "electronics",
  },
  {
    id: "7",
    name: "Arándano Concentrado 50:1 con Vitamina C - 180 Cápsulas",
    price: 379.00,
    image: `${prefix}/images/id7.jpg`,
    category: "electronics",
  },
  {
    id: "8",
    name: "Homodeus Neuro Shield Platinum - 60 Cápsulas",
    price: 849.00,
    image: `${prefix}/images/id8.jpg`,
    category: "electronics",
  },
  {
    id: "9",
    name: "B Life Multivitamínico para Hombre | 200 Cápsulas | 650 mg",
    price: 499.00,
    image: `${prefix}/images/id9.jpg`,
    category: "electronics",
  },
  {
    id: "10",
    name: "B Life Company Zinc de 200 Cápsulas",
    price: 389.00,
    image: `${prefix}/images/id10.jpg`,
    category: "electronics",
  },
]

// Home & Living products data
const homeProducts = [
  {
    id: "11",
    name: "Wild Protein | Barras altas en proteína | Sabor Chocolate",
    price: 179.00,
    image: `${prefix}/images/id11.jpg`,
    category: "home",
  },
  {
    id: "12",
    name: "Quest Hero Crispy | Barra de Proteína Sabor Galletas con Crema",
    price: 389.00,
    image: `${prefix}/images/id12.jpg`,
    category: "home",
  },
  {
    id: "13",
    name: "PBfit | Polvo de Crema de Cacahuate Sin Azúcar",
    price: 269.00,
    image: `${prefix}/images/id13.jpg`,
    category: "home",
  },
  {
    id: "14",
    name: "Morama | Mezcla para Hotcakes con Proteína",
    price: 139.00,
    image: `${prefix}/images/id14.jpg`,
    category: "home",
  },
  {
    id: "15",
    name: "Catalina Crunch | Cereal Sabor Canela (Cinnamon Toast)",
    price: 198.00,
    image: `${prefix}/images/id15.jpg`,
    category: "home",
  },
]

// Accessories products data
const accessoriesProducts = [
  {
    id: "16",
    name: "Carnitina Platinum 1300mg | Con CLA, Cetonas de Frambuesa y Vinagre de Manzana",
    price: 369.00,
    image: `${prefix}/images/id16.jpg`,
    category: "accessories",
  },
  {
    id: "17",
    name: "CLA | Suplemento de Ácido Linoleico Conjugado",
    price: 329.00,
    image: `${prefix}/images/id17.jpg`,
    category: "accessories",
  },
  {
    id: "18",
    name: "Carnitina | High Power | 30 Cápsulas",
    price: 189.00,
    image: `${prefix}/images/id18.jpg`,
    category: "accessories",
  },
  {
    id: "19",
    name: "Giant Sports 100% Whey Proteína | 924g",
    price: 849.00,
    image: `${prefix}/images/id19.jpg`,
    category: "accessories",
  },
  {
    id: "20",
    name: "Burn Fit Gel Corporal | Quema Grasa y Anticelulitis",
    price: 289.00,
    image: `${prefix}/images/id20.jpg`,
    category: "accessories",
  },
]

export default function Home() {
  return (
    <StoreLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-store-dark-green to-store-bright-green text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Productos Saludables para un Estilo de Vida Sostenible
            </h1>
            <p className="text-xl mb-8 opacity-90">
            Descubre nuestra cuidada selección de productos que promueven el bienestar y el respeto por el medio ambiente,
            sin sacrificar calidad, eficacia ni estilo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-store-orange hover:bg-opacity-90 text-white">
                Compra ahora
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-store-dark-green"
                >
                  Más información
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-store-orange/10 p-4 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-store-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad garantizada</h3>
              <p className="text-gray-600">
              Todos nuestros productos son cuidadosamente seleccionados para garantizar los más altos estándares de calidad.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-store-bright-green/10 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8 text-store-bright-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega rápida</h3>
              <p className="text-gray-600">
              Ofrecemos envío rápido y confiable para que usted reciba sus productos lo antes posible.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-store-dark-green/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-store-dark-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
              <p className="text-gray-600">
              Nuestro equipo de atención al cliente está siempre disponible para ayudarle con cualquier pregunta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-store-dark-green">Productos más vendidos</h2>
            <p className="text-gray-600 mt-2">Nuestros productos más populares según las ventas</p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="flex items-center gap-2">
              Ver Todo <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topSellingProducts.map((product) => (
            <div
              key={product.id}
              className="group relative border rounded-lg overflow-hidden flex flex-col hover:border-store-bright-green transition-colors"
            >
              <div className="absolute top-2 right-2 bg-store-orange text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> Mas Vendidos
              </div>
              <Link href={`/product/${product.id}`} className="block aspect-square relative bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-medium text-lg hover:text-store-orange transition-colors">{product.name}</h3>
                </Link>
                <div className="flex items-center mt-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "fill-store-orange text-store-orange" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
                <p className="text-xl font-bold mt-auto text-store-dark-green">MXN ${product.price.toFixed(2)}</p>
                <Link href={`/product/${product.id}`} className="mt-4">
                  <Button className="w-full bg-store-orange hover:bg-store-bright-green text-white">
                    View Product
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12" id="featured">
          <h2 className="text-3xl font-bold mb-6 text-store-dark-green">🏋️‍♂️ PROTEÍNAS</h2>
          <ProductGrid category="featured" products={featuredProducts} />
        </section>

        <section className="mb-12" id="electronics">
          <h2 className="text-3xl font-bold mb-6 text-store-dark-green">💊 VITAMINAS / SALUD</h2>
          <ProductGrid category="electronics" products={electronicsProducts} />
        </section>

        <section className="mb-12" id="home">
          <h2 className="text-3xl font-bold mb-6 text-store-dark-green">🍽️ COMIDA</h2>
          <ProductGrid category="home" products={homeProducts} />
        </section>

        <section className="mb-12" id="accessories">
          <h2 className="text-3xl font-bold mb-6 text-store-dark-green">⚖️ PÉRDIDA DE PESO </h2>
          <ProductGrid category="accessories" products={accessoriesProducts} />
        </section>
      </main>
    </StoreLayout>
  )
}
