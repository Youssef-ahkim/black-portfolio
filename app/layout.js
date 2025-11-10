import "./globals.css";
import Image from "next/image";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Youssef Ahkim Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="relative min-h-screen w-full ">
        {/* Background Image */}
        <div className="fixed inset-0 -z-10 h-full w-full">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Optional overlay for contrast */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Page Content */}
        <main className="relative z-10 min-h-screen flex flex-col">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
