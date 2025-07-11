import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";

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
