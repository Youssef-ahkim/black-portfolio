import "./globals.css";
import Image from "next/image";
import Nav from "@/components/Nav";

export const metadata = {
  title: {
    default: 'Youssef Ahkim | Full-stack Developer',
    template: '%s | Youssef Ahkim'
  },
  description: 'Full-stack Developer based in Casablanca, specializing in Next.js, Laravel, and scalable web applications.',
  keywords: ['Full-stack Developer', 'Casablanca', 'Next.js', 'Laravel', 'React', 'Web Development Morocco'],
  // This helps Google identify the name of the site
  applicationName: 'Youssef Ahkim',
  verification: {
    google: 'bWnqsNP-V0CMi7FzbYsPmEhBGrGtM9myyXUvGqQUrso',
  },
  // OpenGraph site name is a strong signal for search engines
  openGraph: {
    siteName: 'Youssef Ahkim',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Youssef Ahkim',
    url: 'https://youssef-ahkim.vercel.app',
    jobTitle: 'Full-stack Developer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA'
    },
    sameAs: [
      'https://github.com/Youssef-ahkim',
      'https://www.linkedin.com/in/youssef-ahkim-b02bb6331/'
    ]
  };

  return (
    <html lang="en" className="h-full w-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-screen w-full ">
        <div className="fixed inset-0 -z-10 h-full w-full">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <main className="relative z-10 min-h-screen flex flex-col">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}