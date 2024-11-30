"use client";
import { useEffect, useState } from "react";

// import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { inter } from "@/ui/fonts";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-provider";
export default function RootLayout({
  children,
  params: { session, ...params },
}: Readonly<{
  children: React.ReactNode;
  params: { session: any };
}>) {
  const [isClient , setIsClient] = useState('')
  useEffect(()=>{
   setIsClient('light')
  },[])
  return (
    <html lang="en"  className ={`${inter.className}  `}>
      <body className="w-screen  min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme={ isClient}
          enableSystem
          disableTransitionOnChange
        >
        <SessionProvider session={session}>
            <Navbar />
            {children}
            <Footer />
        </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

