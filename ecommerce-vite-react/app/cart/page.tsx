"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useCart } from "@/hooks/use-cart"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const shipping = subtotal > 0 ? 119.99 : 0
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="container px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-4">Tu carrito está vacío</h2>
          <p className="text-muted-foreground mb-6">Parece que aún no has añadido nada a tu carrito.</p>
          <Link href="/products">
            <Button>Continuar Comprando</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Producto</TableHead>
                <TableHead>Descripción</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead className="text-right">Precio</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="w-[70px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="w-[80px] h-[80px] bg-muted rounded-md overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg?height=80&width=80"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.category}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">MXN ${item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">MXN ${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={clearCart}>
              Vaciar Carrito
            </Button>
            <Link href="/products">
              <Button variant="outline">Continuar Comprando</Button>
            </Link>
          </div>
        </div>

        <div>
          <div className="border rounded-lg p-6 space-y-6 sticky top-6">
            <h2 className="text-xl font-bold">Resumen del Pedido</h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>MXN ${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Envío</span>
                <span>MXN ${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>MXN ${total.toFixed(2)}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">IVA incluido</div>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Proceder al Pago
            </Button>

            <div className="text-xs text-muted-foreground text-center">Procesamiento de pago seguro por Stripe</div>
          </div>
        </div>
      </div>
    </div>
  )
}
