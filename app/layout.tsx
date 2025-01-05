import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Vinayak Vitthal Tayade - Portfolio',
  description: 'Professional portfolio of Dr. Vinayak Vitthal Tayade, an experienced Ayurvedic practitioner and educator.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

