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
  title: "Avishkar Woman and Child Hospital | AWCH Asansol",
  description:
    "Avishkar Woman and Child Hospital (AWCH) in Asansol, West Bengal offers expert maternity, pediatric, and gynecological care. Trusted by families for safe and compassionate treatment.",

  icons: {
    icon: "/favIcon.ico",
  },
  keywords: [
    // Brand terms
    "Avishkar Hospital",
    "AWCH",
    "Avishkar Woman and Child Hospital",
    "Awishkar Hospital", // common misspelling
    "Awishkar Child Hospital", // another variation

    // Location-based
    "hospital in Asansol",
    "woman hospital Asansol",
    "child hospital Asansol",
    "maternity hospital Asansol",
    "best hospital Asansol",
    "pediatric hospital Asansol",
    "gynecologist in Asansol",
    "child specialist Asansol",
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
    "vaccination for children",
    "child growth monitoring",

    // Region-specific
    "West Bengal hospital",
    "maternity hospital West Bengal",
    "child hospital West Bengal",
    "gynecologist West Bengal",

    // Informational/search phrases
    "where to deliver baby in Asansol",
    "top child doctor in Asansol",
    "best maternity care in Asansol",
    "trusted woman hospital Asansol",
    "baby vaccination Asansol",
  ],
  authors: [{ name: "Avishkar Woman and Child Hospital" }],
  creator: "Avishkar Woman and Child Hospital",
  metadataBase: new URL("https://avishkarhospitals.com/"),
  openGraph: {
    title: "Avishkar Woman and Child Hospital | AWCH Asansol",
    description:
      "Avishkar Woman and Child Hospital (AWCH) in Asansol provides expert maternity, pediatric, and gynecological services in a caring and trusted environment.",
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
