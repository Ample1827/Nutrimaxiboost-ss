"use client"

import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"

type CartProps = {
  onCheckout?: () => void
}

export default function Cart({ onCheckout }: CartProps) {
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart()
  const { toast } = useToast()

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout()
    } else {
      toast({
        title: "Order placed!",
        description: "Thank you for your purchase.",
        duration: 3000,
      })
      clearCart()
    }
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
        <p className="text-muted-foreground mb-4">Your cart is empty</p>
        <Button variant="outline" onClick={onCheckout}>
          Continue Shopping
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-grow">
        <div className="space-y-4 py-4">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative h-20 w-20 rounded-md overflow-hidden bg-muted">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between">
                  <h4 className="font-medium">{item.name}</h4>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">MXN ${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-r-none"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-3 w-3" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <div className="h-8 px-3 flex items-center justify-center border-y">{item.quantity}</div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-l-none"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="pt-4 space-y-4">
        <Separator />
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span className="text-store-dark-green">MXN ${totalPrice.toFixed(2)}</span>
        </div>
        <Link href="/checkout" className="block w-full">
          <Button className="w-full bg-store-bright-green hover:bg-store-dark-green" onClick={handleCheckout}>
            Proceed to Checkout
          </Button>
        </Link>
        <Button variant="outline" className="w-full" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  )
}
