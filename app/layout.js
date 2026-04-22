import "./globals.css";
import Image from "next/image";
import Nav from "@/components/Nav";

// Fully Optimized SEO Metadata
export const metadata = {
  metadataBase: new URL('https://youssef-ahkim.vercel.app'),
  title: {
    default: 'Youssef Ahkim | Full-stack Developer & Designer',
    template: '%s | Youssef Ahkim'
  },
  description: 'Portfolio of Youssef Ahkim, a creative Full-stack Developer and UI/UX enthusiast based in Casablanca. Specializing in Next.js, Laravel, and high-performance web applications.',
  keywords: [
    'Youssef Ahkim', 
    'Full-stack Developer', 
    'Casablanca', 
    'Next.js Developer', 
    'Laravel Developer', 
    'Portfolio', 
    'Web Development Morocco',
    'UI/UX Designer'
  ],
  authors: [{ name: 'Youssef Ahkim', url: 'https://youssef-ahkim.vercel.app' }],
  creator: 'Youssef Ahkim',
  publisher: 'Youssef Ahkim',
  applicationName: 'Youssef Ahkim',
  
  // Canonical and Alternates
  alternates: {
    canonical: '/',
  },

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification for Search Console
  verification: {
    google: 'bWnqsNP-V0CMi7FzbYsPmEhBGrGtM9myyXUvGqQUrso',
  },

  // OpenGraph site name and details (Crucial for Google branding)
  openGraph: {
    title: 'Youssef Ahkim | Full-stack Developer & Designer',
    description: 'Explore the work and skills of Youssef Ahkim, a Full-stack Developer building modern digital experiences.',
    url: 'https://youssef-ahkim.vercel.app',
    siteName: 'Youssef Ahkim',
    images: [
      {
        url: '/me.jpg', // Fallback to profile image if no specific OG image exists
        width: 1200,
        height: 630,
        alt: 'Youssef Ahkim - Full-stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Youssef Ahkim | Full-stack Developer',
    description: 'Full-stack Developer building scalable and beautiful web applications.',
    images: ['/me.jpg'],
    creator: '@youssefahkim', // Replace with your actual handle if different
  },

  // Icons configuration
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png', // Using logo.png as apple-touch-icon
  },
};

export default function RootLayout({ children }) {
  // Enhanced JSON-LD for Search Engines
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Youssef Ahkim',
    url: 'https://youssef-ahkim.vercel.app',
    image: 'https://youssef-ahkim.vercel.app/me.jpg',
    sameAs: [
      'https://github.com/Youssef-ahkim',
      'https://www.linkedin.com/in/youssef-ahkim-b02bb6331/',
      'https://twitter.com/youssefahkim'
    ],
    jobTitle: 'Full-stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    description: 'Creative Full-stack Developer specializing in Next.js and Laravel.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA'
    }
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Youssef Ahkim',
    url: 'https://youssef-ahkim.vercel.app',
    alternateName: ['Ahkim Youssef', 'Youssef Ahkim Portfolio'],
    publisher: {
      '@type': 'Person',
      name: 'Youssef Ahkim'
    }
  };

  return (
    <html lang="en" className="h-full w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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