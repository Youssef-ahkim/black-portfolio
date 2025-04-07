import "./globals.css";
;

export const metadata = {
  title: "Portfolio",
  description: "Your ",
};
import Image from "next/image";
import "./globals.css";
import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative w-full min-h-screen">
        {/* Background Image */}
        <Image
          src="/bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />

        {/* Page Content */}
           <NavBar /> 

      </body>
    </html>
  );
}



