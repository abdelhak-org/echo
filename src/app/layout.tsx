  'use client'

 // import { ThemeProvider } from "@/components/theme-provider"
  import "./globals.css";
  import Navbar from "@/components/navbar/Navbar";
  import Footer from "@/components/footer/Footer";
  import { inter } from '@/ui/fonts';
  import { SessionProvider } from "next-auth/react";
  import { ThemeProvider } from "@/components/theme-provider";
  export default function RootLayout({
    children ,  params: { session , ...params },

  }: Readonly <{
    children: React.ReactNode;
    params:{ session: any}
  }> ) {


    return (
       <html lang="en" className ={`${inter.className}  `} suppressHydrationWarning >
        <body className="w-screen  min-h-screen flex flex-col" > 
        <ThemeProvider
          attribute = 'class'
          defaultTheme = 'light'
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


/**
 * 
<ThemeProvider
      attribute = 'class'
      defaultTheme = 'light'
      enableSystem
      disableTransitionOnChange
    >
 * export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})



};
 */