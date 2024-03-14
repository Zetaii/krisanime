import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"

import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Providers from "../components/Providers"
import { Toaster } from "sonner"
import Circles from "../components/Circles"

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KRIS Anime",
  description: "Your favorite anime, all in one place.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#cdabcd] ${dmSans.className}`}>
        <Circles />
        <main className="max-w-7xl mx-auto bg-[#cdabcd]">
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
