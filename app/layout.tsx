import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
