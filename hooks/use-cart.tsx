"use client"

import { useContext } from "react"
import { CartProvider } from "@/components/cart-provider"

export function useCart() {
  const context = useContext(CartProvider.context)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
