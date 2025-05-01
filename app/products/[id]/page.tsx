"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"
import { allProducts } from "@/lib/products"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function ProductPage() {
  const { id } = useParams()
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  // Find the product by ID
  const product = allProducts.find((p) => p.id === id)

  if (!product) {
    return <div className="container py-12 text-center">Producto no encontrado</div>
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    })

    toast({
      title: "Añadido al carrito",
      description: `${product.name} (${quantity}) ha sido añadido a tu carrito.`,
    })
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start">
        <div className="flex flex-col space-y-4">
          <div className="bg-muted rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg?height=600&width=600"}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover w-full aspect-square"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-muted rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg?height=200&width=200"}
                alt={product.name}
                width={200}
                height={200}
                className="object-cover aspect-square"
              />
            </div>
            <div className="bg-muted rounded-lg overflow-hidden">
              <Image
                src={"/placeholder.svg?height=200&width=200"}
                alt={product.name}
                width={200}
                height={200}
                className="object-cover aspect-square"
              />
            </div>
            <div className="bg-muted rounded-lg overflow-hidden">
              <Image
                src={"/placeholder.svg?height=200&width=200"}
                alt={product.name}
                width={200}
                height={200}
                className="object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold mt-2">MXN ${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-muted-foreground line-through">MXN ${product.originalPrice.toFixed(2)}</p>
            )}
          </div>

          <div className="space-y-2">
            <p className="text-muted-foreground">{product.description}</p>
            {product.features && (
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button size="lg" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Añadir al Carrito
          </Button>

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Descripción</TabsTrigger>
              <TabsTrigger value="specifications">Especificaciones</TabsTrigger>
              <TabsTrigger value="reviews">Reseñas</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Detalles del Producto</h3>
                <p className="text-muted-foreground">{product.longDescription || product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Especificaciones Técnicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-muted-foreground">Material</div>
                    <div>Mezcla premium</div>
                    <div className="text-muted-foreground">Peso</div>
                    <div>0.5 kg</div>
                    <div className="text-muted-foreground">Dimensiones</div>
                    <div>10 x 5 x 2 cm</div>
                    <div className="text-muted-foreground">Uso Recomendado</div>
                    <div>Diario</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Reseñas de Clientes</CardTitle>
                  <CardDescription>4.8 de 5 estrellas (24 reseñas)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between">
                      <div className="font-medium">Juan D.</div>
                      <div className="text-muted-foreground">★★★★★</div>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      ¡Gran producto! Exactamente lo que necesitaba para mi rutina de entrenamiento.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <div className="flex justify-between">
                      <div className="font-medium">Sara M.</div>
                      <div className="text-muted-foreground">★★★★☆</div>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Buena calidad pero el envío tardó más de lo esperado.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    Leer Todas las Reseñas
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
export async function generateStaticParams() {
  // Replace this with actual data source or keep using allProducts
  return allProducts.map((product) => ({
    id: product.id,
  }))
}