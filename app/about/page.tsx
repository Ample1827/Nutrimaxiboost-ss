import StoreLayout from "@/components/store-layout"
import { Leaf } from "lucide-react"

export default function AboutPage() {
  return (
    <StoreLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-store-dark-green text-center">About Us</h1>

        <div className="flex justify-center mb-8">
          <div className="bg-store-dark-green text-white p-4 rounded-full">
            <Leaf className="h-16 w-16 text-store-bright-green" />
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Welcome to EcoStore, your destination for eco-friendly and sustainable products. We believe in making a
            positive impact on our planet while providing high-quality items for our customers.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-store-dark-green">Our Mission</h2>
          <p className="mb-6">
            Our mission at EcoStore is to provide sustainable alternatives to everyday products. We carefully select
            items that are environmentally friendly, ethically sourced, and designed to reduce waste. By offering these
            products, we aim to make it easier for our customers to make eco-conscious choices.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-store-dark-green">Our Story</h2>
          <p className="mb-6">
            EcoStore was founded in 2020 by a group of environmentally conscious entrepreneurs who saw the need for a
            one-stop shop for sustainable products. What started as a small online store has grown into a community of
            like-minded individuals committed to making a difference.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-store-dark-green">Our Values</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Sustainability: We prioritize products that have minimal environmental impact.</li>
            <li>Quality: We believe sustainable products should also be durable and high-quality.</li>
            <li>Transparency: We provide clear information about our products and their origins.</li>
            <li>Community: We support and engage with our community of eco-conscious consumers.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-store-dark-green">Join Us</h2>
          <p className="mb-6">
            Thank you for supporting our mission to create a more sustainable future. By choosing EcoStore, you're not
            just making a purchase – you're making a statement about the kind of world you want to live in.
          </p>
        </div>
      </div>
    </StoreLayout>
  )
}
