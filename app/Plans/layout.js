import { Geist, Geist_Mono } from "next/font/google";
import { Lexend_Exa } from "next/font/google";



const lexendExa = Lexend_Exa({
  subsets: ['latin'],
  weight: ['100', '400', '700'], // Optional: Choose the weights you need
  display: 'swap',
  variable: '--font-lexend-exa', // Optional: for using CSS variables
})

export const metadata = {
  title: "Octacorefitness - Plans",
  description: "The gym with responsibility to curve our member upto their potential",
};

export default function RootLayout({ children }) {
  return (
    
      <body
        className={`${lexendExa.className} antialiased `}
      >

        <div className="relative w-full min-h-screen  text-white overflow-hidden">
        
           
          <div className="relative z-1  ">

            {children}
           
        </div>
          </div>

 
      </body>
    
  );
}
