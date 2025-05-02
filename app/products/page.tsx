import StoreLayout from "@/components/store-layout"
import ProductGrid from "@/components/product-grid"

// All products combined
const allProducts = [
  // Featured Products
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
  // Electronics
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
  // Home & Living
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
  // Accessories
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

export default function ProductsPage() {
  return (
    <StoreLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-store-dark-green">All Products</h1>
        <ProductGrid products={allProducts} category="all" />
      </div>
    </StoreLayout>
  )
}
