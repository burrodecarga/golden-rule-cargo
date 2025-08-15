import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import Script from "next/script"
import SideNav from "@/components/ui/dashboard/sidenav"

const defaultUrl=process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  :"http://localhost:3000"

export const metadata: Metadata={
  metadataBase: new URL(defaultUrl),
  title: "Golden Rule Cargo LLC",
  description: "The fast and safe way to transport cargo",
}

const geistSans=Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
              <div className="w-full flex-none md:w-60">
                <SideNav />
              </div>
              <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
              </div>

            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
