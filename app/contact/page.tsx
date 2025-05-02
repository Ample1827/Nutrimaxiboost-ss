"use client"

import type React from "react"

import { useState } from "react"
import StoreLayout from "@/components/store-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <StoreLayout>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-store-dark-green text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-store-dark-green">Get in Touch</h2>
            <p className="mb-8">
              Have questions about our products or services? We're here to help! Fill out the form and we'll get back to
              you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-store-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@Nutrimaxiboost.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-store-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+52 (55) 1234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-store-orange flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">
                    123 Eco Street
                    <br />
                    Sustainable District
                    <br />
                    Mexico City, 12345
                    <br />
                    Mexico
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-2xl font-bold mb-6 text-store-dark-green">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Input id="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={5} required />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-store-bright-green hover:bg-store-dark-green"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  )
}
