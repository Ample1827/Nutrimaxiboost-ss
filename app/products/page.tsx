import StoreLayout from "@/components/store-layout"
import ProductGrid from "@/components/product-grid"
import { prefix } from "@/lib/prefix"; // adjust path as needed


// All products combined
const allProducts = [
  // Featured Products
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
  // Electronics
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
