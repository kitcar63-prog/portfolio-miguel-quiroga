import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Ángel Quiroga - Tech Lead & Full-Stack Developer",
  description: "Tech Lead con más de 20 años de experiencia en desarrollo de software. Especialista en PHP, .NET, Java, Python, JavaScript (React, Node.js). Trabajé con Accenture, Repsol, Galp, El Corte Inglés, Iberdrola. Experto en blockchain, Web3, NFT, AWS, Docker.",
  keywords: [
    "Miguel Ángel Quiroga",
    "Tech Lead",
    "Full Stack Developer",
    "PHP Developer",
    ".NET Developer",
    "JavaScript Developer",
    "React Developer",
    "Python Developer",
    "Blockchain Developer",
    "Web3",
    "NFT",
    "AWS",
    "Docker",
    "Cartagena",
    "España",
    "Accenture",
    "Repsol",
    "El Corte Inglés",
    "VetoClock",
    "Crown Sport Nutrition"
  ],
  authors: [{ name: "Miguel Ángel Quiroga" }],
  creator: "Miguel Ángel Quiroga",
  publisher: "Miguel Ángel Quiroga",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://maqdevelopment.netlify.app'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Miguel Ángel Quiroga - Tech Lead & Full-Stack Developer",
    description: "Tech Lead con 20+ años de experiencia. Especialista en PHP, .NET, Java, Python, JavaScript, Blockchain y Web3. Clientes: Accenture, Repsol, El Corte Inglés, Iberdrola.",
    url: 'https://maqdevelopment.netlify.app',
    siteName: 'Miguel Ángel Quiroga Portfolio',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/logo-maq.png',
        width: 1200,
        height: 630,
        alt: 'Miguel Ángel Quiroga - Tech Lead',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Miguel Ángel Quiroga - Tech Lead & Full-Stack Developer",
    description: "Tech Lead con 20+ años de experiencia en PHP, .NET, Java, Python, JavaScript, Blockchain y Web3.",
    images: ['/logo-maq.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo-maq.png' },
      { url: '/logo-maq.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/logo-maq.png',
    apple: '/logo-maq.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo-maq.png" />
        <link rel="apple-touch-icon" href="/logo-maq.png" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Miguel Ángel Quiroga',
              jobTitle: 'Tech Lead & Full-Stack Developer',
              url: 'https://maqdevelopment.netlify.app',
              email: 'maqdevelopment.com@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Cartagena',
                addressCountry: 'ES'
              },
              sameAs: [
                'https://www.linkedin.com/in/miguel-angel-quiroga-55133314/',
                'https://github.com/kitcar63-prog'
              ],
              knowsAbout: [
                'PHP',
                '.NET',
                'Java',
                'Python',
                'JavaScript',
                'React',
                'Node.js',
                'Blockchain',
                'Web3',
                'AWS',
                'Docker'
              ],
              worksFor: [
                { '@type': 'Organization', name: 'Accenture' },
                { '@type': 'Organization', name: 'Repsol' },
                { '@type': 'Organization', name: 'Galp' },
                { '@type': 'Organization', name: 'Red Eléctrica' },
                { '@type': 'Organization', name: 'Iberdrola' },
                { '@type': 'Organization', name: 'El Corte Inglés' }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}