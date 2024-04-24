"use client"

import { ThemeProvider } from "@/components/theme-provider"
//import type { Metadata } from "next";
import { Inter , Roboto_Mono , Nova_Script } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['400', '500', '700'],
})

const script = Nova_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nova-script',
  weight: '400',
})
export default function RootLayout({
  children ,  params: { session , ...params },

}: Readonly<{
  children: React.ReactNode;
  params:{ session: any}
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} ${script.className}`}>
      <body >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SessionProvider session={session}>
        <Navbar />
        {children}
        <Footer />
          </SessionProvider>
        </ThemeProvider >
        </body>
    </html>
  );
}


/**
 * 
 * export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 */