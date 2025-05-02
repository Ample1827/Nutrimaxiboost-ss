import Image from "next/image"
import Link from "next/link"
import StoreLayout from "@/components/store-layout"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, TrendingUp, ShieldCheck, Truck, Clock } from "lucide-react"

// Top selling products data
const topSellingProducts = [
  {
    id: "1",
    name: "Premium Headphones",
    price: 2499.99,
    image: { src: "/images/whey.jpeg", alt: "Premium Headphones", width: 500, height: 500 },
    category: "featured",
    rating: 4.8,
    sales: 1245,
  },
  {
    id: "8",
    name: "Laptop",
    price: 19999.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
    rating: 4.9,
    sales: 982,
  },
  {
    id: "14",
    name: "Robot Vacuum",
    price: 5999.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "home",
    rating: 4.7,
    sales: 876,
  },
  {
    id: "3",
    name: "Smart Watch",
    price: 3899.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "featured",
    rating: 4.6,
    sales: 754,
  },
  {
    id: "17",
    name: "Wireless Charger",
    price: 699.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
    rating: 4.5,
    sales: 689,
  },
]

// Featured products data
const featuredProducts = [
  {
    id: "1",
    name: "Premium Headphones",
    price: 2499.99,
    image: "/images/whey.jpeg",
    category: "featured",
  },
  {
    id: "2",
    name: "Wireless Earbuds",
    price: 1799.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "featured",
  },
  {
    id: "3",
    name: "Smart Watch",
    price: 3899.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "featured",
  },
  {
    id: "4",
    name: "Bluetooth Speaker",
    price: 1599.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "featured",
  },
  {
    id: "5",
    name: "Fitness Tracker",
    price: 1199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "featured",
  },
]

// Electronics products data
const electronicsProducts = [
  {
    id: "6",
    name: "Smartphone",
    price: 13999.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
  },
  {
    id: "7",
    name: "Tablet",
    price: 6999.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
  },
  {
    id: "8",
    name: "Laptop",
    price: 19999.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
  },
  {
    id: "9",
    name: "Digital Camera",
    price: 8999.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
  },
  {
    id: "10",
    name: "Power Bank",
    price: 799.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "electronics",
  },
]

// Home & Living products data
const homeProducts = [
  {
    id: "11",
    name: "Smart Light Bulbs",
    price: 599.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "home",
  },
  {
    id: "12",
    name: "Coffee Maker",
    price: 1799.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "home",
  },
  {
    id: "13",
    name: "Air Purifier",
    price: 2999.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "home",
  },
  {
    id: "14",
    name: "Robot Vacuum",
    price: 5999.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "home",
  },
  {
    id: "15",
    name: "Throw Blanket",
    price: 999.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "home",
  },
]

// Accessories products data
const accessoriesProducts = [
  {
    id: "16",
    name: "Phone Case",
    price: 399.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
  },
  {
    id: "17",
    name: "Wireless Charger",
    price: 699.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
  },
  {
    id: "18",
    name: "Laptop Sleeve",
    price: 499.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
  },
  {
    id: "19",
    name: "USB-C Hub",
    price: 999.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "accessories",
  },
  {
    id: "20",
    name: "Screen Protector",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
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
              Eco-Friendly Products for a Sustainable Lifestyle
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover our curated collection of sustainable products that help you reduce your environmental footprint
              without compromising on quality or style.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-store-orange hover:bg-opacity-90 text-white">
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-store-dark-green"
                >
                  Learn More
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
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                All our products are carefully selected to ensure the highest quality standards.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-store-bright-green/10 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8 text-store-bright-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                We offer quick and reliable shipping to get your products to you as soon as possible.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="bg-store-dark-green/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-store-dark-green" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer service team is always available to assist you with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-store-dark-green">Top Selling Products</h2>
            <p className="text-gray-600 mt-2">Our most popular products based on sales</p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
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
                <TrendingUp className="h-3 w-3" /> Top Seller
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
          <h2 className="text-3xl font-bold mb-6 text-store-dark-green">Featured Products</h2>
          <ProductGrid category="featured" products={featuredProducts} />
        </section>

        <section className="mb-12" id="electronics">
          <h2 className="text-3xl font-bold mb-6 text-store-dark-green">Electronics</h2>
          <ProductGrid category="electronics" products={electronicsProducts} />
        </section>

        <section className="mb-12" id="home">
          <h2 className="text-3xl font-bold mb-6 text-store-dark-green">Home & Living</h2>
          <ProductGrid category="home" products={homeProducts} />
        </section>

        <section className="mb-12" id="accessories">
          <h2 className="text-3xl font-bold mb-6 text-store-dark-green">Accessories</h2>
          <ProductGrid category="accessories" products={accessoriesProducts} />
        </section>
      </main>
    </StoreLayout>
  )
}
