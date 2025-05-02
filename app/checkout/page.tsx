"use client"
import StoreLayout from "@/components/store-layout";
import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2, Leaf, Scissors, CreditCard } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart()
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [orderNumber, setOrderNumber] = useState("")
  const [sameAsBilling, setSameAsBilling] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Generate random order number
    const randomOrderNumber = "ECO-" + Math.floor(100000 + Math.random() * 900000).toString()
    setOrderNumber(randomOrderNumber)

    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
      clearCart()
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase.",
        duration: 5000,
      })
    }, 1500)
  }

  if (isComplete) {
    const orderDate = new Date().toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    const orderTime = new Date().toLocaleTimeString("es-MX")

    return (
      <StoreLayout>
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="bg-white border rounded-lg overflow-hidden shadow-lg">
            {/* Ticket Header */}
            <div className="bg-store-dark-green text-white p-6 text-center">
              <div className="flex justify-center mb-2">
                <Leaf className="h-10 w-10 text-store-bright-green" />
              </div>
              <h1 className="text-2xl font-bold">EcoStore</h1>
              <p className="opacity-80">Purchase Receipt</p>
            </div>

            {/* Ticket Body */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-500">Order Number</p>
                  <p className="font-bold">{orderNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Date & Time</p>
                  <p>{orderDate}</p>
                  <p>{orderTime}</p>
                </div>
              </div>

              <div className="border-t border-dashed pt-4 pb-2">
                <h2 className="font-bold text-lg mb-4">Order Summary</h2>
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          MXN ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium">MXN ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-dashed mt-4 pt-4">
                <div className="flex justify-between mb-2">
                  <p>Subtotal</p>
                  <p>MXN ${totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Shipping</p>
                  <p>MXN $150.00</p>
                </div>
                <div className="flex justify-between font-bold text-lg mt-4">
                  <p>Total</p>
                  <p className="text-store-dark-green">MXN ${(totalPrice + 150).toFixed(2)}</p>
                </div>
              </div>

              <div className="border-t border-dashed mt-6 pt-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-store-bright-green" />
                  <p className="font-bold text-store-dark-green">Payment Successful</p>
                </div>
                <p className="text-center text-sm text-gray-500 mb-6">
                  Thank you for your purchase! Your order has been confirmed.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-0 -ml-6 top-1/2 transform -translate-y-1/2 w-6 h-12 bg-gray-100 rounded-r-full"></div>
                <div className="absolute right-0 -mr-6 top-1/2 transform -translate-y-1/2 w-6 h-12 bg-gray-100 rounded-l-full"></div>
                <div className="border-t border-dashed my-6 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                    <Scissors className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-500 mb-4">
                  If you have any questions about your order, please contact our customer support.
                </p>
                <Button onClick={() => router.push("/")} className="bg-store-orange hover:bg-store-bright-green">
                  Continue Shopping
                </Button>
              </div>
            </div>

            {/* Ticket Footer */}
            <div className="bg-gray-50 p-4 text-center text-sm text-gray-500 border-t">
              <p>© {new Date().getFullYear()} EcoStore. All rights reserved.</p>
              <p>123 Eco Street, Sustainable District, Mexico City</p>
            </div>
          </div>
        </div>
      </StoreLayout>
    )
  }

  if (cart.length === 0) {
    return (
      <StoreLayout>
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-store-dark-green">Your cart is empty</h1>
            <p>Add some products to your cart before checking out.</p>
            <Button onClick={() => router.push("/")} className="mt-6 bg-store-orange hover:bg-store-bright-green">
              Browse Products
            </Button>
          </div>
        </div>
      </StoreLayout>
    )
  }

  return (
    <StoreLayout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-store-dark-green">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Tabs defaultValue="shipping" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  <TabsTrigger value="payment">Payment</TabsTrigger>
                  <TabsTrigger value="review">Review</TabsTrigger>
                </TabsList>
                
                {/* Shipping Information */}
                <TabsContent value="shipping" className="bg-white p-6 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" required />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" required />
                    </div>
                  </div>
                </TabsContent>
                
                {/* Payment Information */}
                <TabsContent value="payment" className="bg-white p-6 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-6">
                      <CreditCard className="h-6 w-6 text-store-orange" />
                      <span className="font-medium">Credit Card Details</span>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input id="expiryDate" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="sameAsBilling"
                        checked={sameAsBilling}
                        onChange={() => setSameAsBilling(!sameAsBilling)}
                      />
                      <Label htmlFor="sameAsBilling">Billing address same as shipping</Label>
                    </div>
                    
                    {!sameAsBilling && (
                      <div className="space-y-4 mt-4 pt-4 border-t">
                        <h3 className="font-medium">Billing Address</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="billingFirstName">First Name</Label>
                            <Input id="billingFirstName" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="billingLastName">Last Name</Label>
                            <Input id="billingLastName" required />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="billingAddress">Address</Label>
                          <Input id="billingAddress" required />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="billingCity">City</Label>
                            <Input id="billingCity" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="billingPostalCode">Postal Code</Label>
                            <Input id="billingPostalCode" required />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="billingState">State</Label>
                          <Input id="billingState" required />
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                {/* Order Review */}
                <TabsContent value="review" className="bg-white p-6 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4">Order Review</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea id="notes" placeholder="Special instructions for delivery or any other notes" />
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      <h3 className="font-medium">Payment Method</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="payment-card" name="payment" defaultChecked />
                          <Label htmlFor="payment-card">Credit Card</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="payment-cash" name="payment" />
                          <Label htmlFor="payment-cash">Cash on Delivery</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="payment-transfer" name="payment" />
                          <Label htmlFor="payment-transfer">Bank Transfer</Label>
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full mt-6 bg-store-bright-green hover:bg-store-dark-green"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </form>
          </div>

          {/* Order Summary as Ticket */}
          <div>
            <div className="bg-white rounded-lg border overflow-hidden shadow-md">
              <div className="bg-store-dark-green text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-store-bright-green" />
                    <h2 className="text-xl font-semibold">Order Summary</h2>
                  </div>
                  <div className="text-sm opacity-80">Preview Receipt</div>
                </div>
              </div>

              <div className="p-6">
                <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">{item.name}</h4>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>
                            MXN ${item.price.toFixed(2)} × {item.quantity}
                          </span>
                          <span>MXN ${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-dashed pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>MXN ${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span>MXN $150.00</span>
                  </div>
                  <Separator className="my-2 border-dashed" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-store-dark-green">MXN ${(totalPrice + 150).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  )
}
