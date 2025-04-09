import "./globals.css";

export const metadata = {
  title: "Youssef Ahkim Portfolio",
  description: "Welcome to my portfolio",
};

import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative w-full min-h-screen" >
        {/* Background Image */}
        <Image
          src="/bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="-z-10"
          priority
        />

        {/* Page Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}