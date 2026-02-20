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
  metadataBase: new URL('https://lytelabs.com'),
  title: "Stride EV - Smart E-Bikes for the Modern Commuter",
  description: "Smarter Rides, Elevated Vibes",
  openGraph: {
    title: "Stride EV",
    description: "Power Your Journey with Innovation ",
    url: "https://lytelabs.com",
    siteName: "Stride EV",
    images: [
      {
        url: "/stride_icon.png",
        width: 1200,
        height: 630,
        alt: "Stride EV Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lytelabs",
    description:
      "Join the green future with modular energy and mobility solutions.",
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
