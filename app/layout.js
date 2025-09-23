import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Avishkar Women and Children Hospital | AWCH Asansol",
  description:
    "Avishkar Women and Children Hospital (AWCH) in Asansol, West Bengal offers expert maternity, pediatric, and gynecological care. Trusted by families for safe and compassionate treatment.",

  icons: {
    icon: "/favIcon.ico",
  },
  keywords: [
    // Brand terms
    "Avishkar Hospital",
    "AWCH",
    "Avishkar Women and Children Hospital",
    "Awishkar Hospital", // common misspelling
    "Awishkar Children Hospital", // another variation

    // Location-based
    "hospital in Asansol",
    "women hospital Asansol",
    "children hospital Asansol",
    "maternity hospital Asansol",
    "best hospital Asansol",
    "pediatric hospital Asansol",
    "gynecologist in Asansol",
    "children specialist Asansol",
    "delivery hospital Asansol",
    "pregnancy care Asansol",
    "newborn care Asansol",
    "baby hospital Asansol",

    // Services
    "maternity care",
    "gynecology",
    "pediatrics",
    "women's health",
    "pregnancy services",
    "normal delivery",
    "C-section delivery",
    "newborn screening",
    "postnatal care",
    "neonatal ICU",
    "vaccination for childrenren",
    "children growth monitoring",

    // Region-specific
    "West Bengal hospital",
    "maternity hospital West Bengal",
    "children hospital West Bengal",
    "gynecologist West Bengal",

    // Informational/search phrases
    "where to deliver baby in Asansol",
    "top children doctor in Asansol",
    "best maternity care in Asansol",
    "trusted women hospital Asansol",
    "baby vaccination Asansol",
  ],
  authors: [{ name: "Avishkar Women and Children Hospital" }],
  creator: "Avishkar Women and Children Hospital",
  metadataBase: new URL("https://avishkarhospitals.com/"),
  openGraph: {
    title: "Avishkar Women and Children Hospital | AWCH Asansol",
    description:
      "Avishkar Women and Children Hospital (AWCH) in Asansol provides expert maternity, pediatric, and gynecological services in a caring and trusted environment.",
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
    title: "Avishkar Women and Children Hospital | AWCH Asansol",
    description:
      "AWCH in Asansol offers compassionate maternity, pediatric, and gynecology care. Trusted by families across West Bengal.",
    images: ["https://avishkarhospitals.com/nav_image.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased bg-black-50">
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
