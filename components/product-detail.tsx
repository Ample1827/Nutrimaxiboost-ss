"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"
import { Minus, Plus, ShoppingCart, Star, ArrowLeft, Truck, Shield, RefreshCw } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Product } from "@/lib/products"

type ProductDetailProps = {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const router = useRouter()
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name} ${quantity > 1 ? "have" : "has"} been added to your cart.`,
      duration: 3000,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6 flex items-center text-store-dark-green" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-white p-6 rounded-lg border">
          <div className="aspect-square relative">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2 text-store-dark-green">{product.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "fill-store-orange text-store-orange" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold text-store-dark-green mb-4">MXN ${product.price.toFixed(2)}</p>

          <p className="mb-6 text-gray-700">{product.description}</p>

          <div className="mb-6">
            <p className="font-medium mb-2">
              Availability:
              <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
                {product.stock > 0 ? ` In Stock (${product.stock} available)` : " Out of Stock"}
              </span>
            </p>
            <p className="font-medium">
              Category: <span className="text-gray-600 capitalize">{product.category}</span>
            </p>
          </div>

          <div className="flex items-center mb-6">
            <div className="flex items-center border rounded-md mr-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-r-none"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="h-10 w-12 flex items-center justify-center border-x">{quantity}</div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-l-none"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button
              className="bg-store-orange hover:bg-store-bright-green flex-grow"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              añadir a la cesta
            </Button>
          </div>

          <div className="space-y-3 border-t pt-6">
            <div className="flex items-center">
              <Truck className="h-5 w-5 text-store-bright-green mr-3" />
              <span>Envío gratis en pedidos mayores a MXN $1,000</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-store-bright-green mr-3" />
              <span>Garantía de 2 años incluida</span>
            </div>
            <div className="flex items-center">
              <RefreshCw className="h-5 w-5 text-store-bright-green mr-3" />
              <span>garantía de devolución de dinero de 30 días</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="features" className="mb-12">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="features">Características</TabsTrigger>
          <TabsTrigger value="specifications">Especificaciones del producto</TabsTrigger>
          <TabsTrigger value="shipping">Envíos y devoluciones</TabsTrigger>
          <TabsTrigger value="questions">Preguntas frecuentes</TabsTrigger>
        </TabsList>
        <TabsContent value="features" className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">Características clave</h3>
          <ul className="list-disc pl-6 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="specifications" className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">Especificaciones técnicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="border-b pb-2">
                <span className="font-medium">{key}:</span> {value}
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="questions" className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">Preguntas frecuentes</h3>
          <ul className="space-y-4">
            {product.faq && product.faq.length > 0 ? (
              product.faq.map((item, index) => (
          <li key={index}>
            <p className="font-medium">❓ {item.question}</p>
            <p className="text-gray-700">💬 {item.answer}</p>
          </li>
              ))
            ) : (
              <li>No hay preguntas registradas para este producto.</li>
            )}
          </ul>
        </TabsContent>
        <TabsContent value="shipping" className="bg-white p-6 rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">Información de envío</h3>
          <p className="mb-4">
          Ofrecemos envío estándar gratuito en todos los pedidos superiores a MXN $1,000.
           Para pedidos inferiores a MXN $1,000, se aplicará un cargo de envío de MXN $150.
          </p>
          <p className="mb-4">
          El envío estándar suele tardar entre 3 y 5 días laborables.
           El envío exprés está disponible al finalizar la compra por un cargo adicional.
          </p>
          <h3 className="text-xl font-semibold mb-4 mt-6">Política de devoluciones</h3>
          <p className="mb-4">
          Si no está completamente satisfecho con su compra,
          puede devolverla dentro de los 30 días para obtener un reembolso completo o un cambio.
          </p>
          <p>
          Los artículos deben estar en su estado y embalaje originales.
          Contacta con nuestro equipo de atención al cliente para solicitar una devolución.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
