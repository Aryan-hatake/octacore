import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Lexend_Exa } from "next/font/google";



const lexendExa = Lexend_Exa({
  subsets: ['latin'],
 // Optional: Choose the weights you need
  display: 'swap',
 
})

export const metadata = {
  title: "Octacorefitness - Home",
  description: "The gym with responsibility to curve our member upto their potential",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body
        className={`${lexendExa.className} antialiased `}
      >

        <div className="relative w-full min-h-screen  text-white overflow-hidden">
        
           
          <div className="relative z-1  ">

            {children}
           
        </div>
          </div>

 
      </body>
    </html>
  );
}
