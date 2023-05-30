"use client"
import './globals.css'
import { Inter } from 'next/font/google'
//
import { ThemeProvider } from "@mui/material";
import theme  from "./utils/theme";
import Navbar from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Bloggin Site',
  description: 'site for amazon affiliate marketting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
      <ThemeProvider theme={theme}>
        <Navbar/>
          {children}
        </ThemeProvider>
          </body>
      </html>
  )
}
