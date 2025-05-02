// app/layout.tsx or app/layout.ts

import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/hooks/use-cart"; // adjust path if different

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
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
