import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";


export const metadata = {
  title: "Avishkar Woman and Child Hospital | AWCH Asansol",
  description:
    "AWCH is a trusted woman and child hospital in Asansol, West Bengal. Expert maternity, pediatric, and gynecological care.",
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
  "baby vaccination Asansol"
],
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
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Avishkar Woman and Child Hospital | AWCH Asansol</title>
        <meta
          name="description"
          content="Avishkar Woman and Child Hospital is a trusted woman and child hospital in Asansol, West Bengal. Expert maternity, pediatric, and gynecological care."
        />

        <meta name="keywords" content="woman hospital Asansol, child hospital Asansol, maternity care, pediatrician Asansol, gynecologist Asansol, AWCH" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Avishkar Woman and Child Hospital" />
        <meta name="google-site-verification" content="uwbxAXi9JYhgVWL6krN8xSshRs7Kjt-lBMGfVfblxLQ" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Site‑name structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Avishkar Woman and Child Hospital",
              url: "https://avishkarhospitals.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://avishkarhospitals.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

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
