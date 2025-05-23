// app/layout.tsx or app/layout.ts

import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/hooks/use-cart"; // adjust path if different

export const metadata: Metadata = {
  title: "Nutrimaxiboost",
  description: "healthy supplements and products",
  generator: "Adalberto Romero Romero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
