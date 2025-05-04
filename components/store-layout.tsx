"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CartProvider } from "@/components/cart-provider"
import Cart from "@/components/cart"
import { useCart } from "@/hooks/use-cart"

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <header className="border-b bg-store-dark-green text-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <ShoppingCart  className="h-6 w-6 text-store-bright-green" />
                <span className="font-bold text-xl">Nutrimaxiboost</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="hover:text-store-orange transition-colors">
                Home
              </Link>
              <Link href="/products" className="hover:text-store-orange transition-colors">
                Products
              </Link>
              <Link href="/about" className="hover:text-store-orange transition-colors">
              Sobre nosotros
              </Link>
              <Link href="/contact" className="hover:text-store-orange transition-colors">
                Contacto
              </Link>
            </nav>
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-white hover:text-store-orange">
                  <ShoppingCart className="h-5 w-5" />
                  <CartItemCount />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                <Cart
                  onCheckout={() => {
                    setIsCartOpen(false)
                    window.location.href = "/checkout"
                  }}
                />
              </SheetContent>
            </Sheet>
          </div>
          <div className="md:hidden container mx-auto px-4 pb-3">
            <nav className="flex items-center justify-around">
              <Link href="/" className="text-sm hover:text-store-orange transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-sm hover:text-store-orange transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-sm hover:text-store-orange transition-colors">
              Sobre nosotros
              </Link>
              <Link href="/contact" className="text-sm hover:text-store-orange transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-auto border-t py-6 bg-store-dark-green text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShoppingCart className="h-5 w-5 text-store-bright-green" />
              <span className="font-bold">Nutrimaxiboost</span>
            </div>

            <div className="flex justify-center gap-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-5 w-5 hover:text-store-bright-green transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5 hover:text-store-bright-green transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5 hover:text-store-bright-green transition-colors" />
              </a>
            </div>

            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Nutrimaxiboost. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  )
}

function CartItemCount() {
  const { cart } = useCart()
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  if (itemCount === 0) return null

  return (
    <span className="absolute -top-2 -right-2 bg-store-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {itemCount}
    </span>
  )
}
