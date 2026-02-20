// app/layout.tsx
import type { Metadata, Viewport } from "next";
// import { Inter } from "next/font/google";
import '../styles/design-tokens.css'
import "../styles/globals.css";
import AnimatedNavbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F1113',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://strideev.co'),
  title: "Stride EV - Smart, Reliable & Innovative Transportation",
  description: "Stride EV delivers efficiency with smart transportation solutions. Experience reliable, innovative e-bikes designed for the modern hustle.",
  keywords: ["Stride EV", "Smart Transportation", "Reliable", "Innovative", "Delivers Efficiency", "E-Bikes", "Logistics", "Lagos", "Nigeria"],
  openGraph: {
    title: "Stride EV - Smart & Reliable Transportation",
    description: "Stride EV delivers efficiency and innovation. The smartest way to move.",
    url: "https://strideev.co",
    siteName: "Stride EV",
    images: [
      {
        url: "/stride_icon.png",
        width: 1200,
        height: 630,
        alt: "Stride EV - Smart Transportation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stride EV",
    description:
      "Stride EV delivers efficiency with smart transportation solutions.",
    images: ["/stride_icon.png"],
  },
  icons: {
    icon: [
      { url: "/stride_icon.png", sizes: "32x32", type: "image/png" },
      { url: "/stride_icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/stride_icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "theme-color": "#0F1113",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-inter ">
        <AnimatedNavbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
