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
  // Accessories
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
