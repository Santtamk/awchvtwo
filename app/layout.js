import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

import { Inter } from "next/font/google";

export const metadata = {
  title: "Avishkar Woman and Child Hospital | AWCH Asansol",
  description:
    "AWCH is a trusted woman and child hospital in Asansol, West Bengal. Expert maternity, pediatric, and gynecological care.",
  icons: {
    icon: "/favIcon.ico",
  },
  keywords:
    "woman hospital Asansol, child hospital Asansol, maternity care, pediatrician Asansol, gynecologist Asansol, AWCH",
  authors: [{ name: "Avishkar Woman and Child Hospital" }],
  creator: "Avishkar Woman and Child Hospital",
  metadataBase: new URL("https://avishkarhospitals.com/"),
  openGraph: {
    title: "Avishkar Woman and Child Hospital | AWCH Asansol",
    description:
      "Leading maternity and child hospital in Asansol, West Bengal. Trusted gynecologists and pediatricians.",
    url: "https://avishkarhospitals.com",
    siteName: "AWCH",

    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://avishkarhospitals.com/nav_image.webp",
        width: 1200,
        height: 630,
        alt: "Avishkar Hospital Front Building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avishkar Woman and Child Hospital | AWCH Asansol",
    description:
      "Specialized maternity and child care hospital in Asansol, West Bengal.",
    images: ["https://avishkarhospitals.com/nav_image.webp"],
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` scroll-smooth ${inter.variable} `}>
      <head>
        {/* Manual fallback to ensure proper crawling */}
        <title>Avishkar Woman and Child Hospital | AWCH Asansol</title>
        <meta
          name="description"
          content="AWCH is a trusted woman and child hospital in Asansol, West Bengal. Expert maternity, pediatric, and gynecological care."
        />
        <meta
          name="google-site-verification"
          content="uwbxAXi9JYhgVWL6krN8xSshRs7Kjt-lBMGfVfblxLQ"
        />
        <meta
          name="keywords"
          content="woman hospital Asansol, child hospital Asansol, maternity care, pediatrician Asansol, gynecologist Asansol, AWCH"
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favIcon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      </head>
      <body className={`antialiased bg-black-50`}>
        <Navbar />
        <main className="max-w-[1440px] mx-auto">
          <Toaster position="bottom-center" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
