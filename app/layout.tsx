import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import Providers from "./providers";

const geist = Geist({
 subsets:["latin"]
});

export const metadata: Metadata = {
 title:"Terrix",
 description:"Luxury Real Estate Web3",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
   <html lang="en">
      <body className={geist.className}>
        <Providers>
          {children}
        </Providers>
      </body>
   </html>
 );
}