import type { Metadata } from "next";

const SITE_URL = "https://poem-web.vercel.app"; // Apna final Vercel domain yahan update kar lena

export const metadata: Metadata = {
  title: "Anhad - Poetry & Stories Collection",
  description: "Explore a beautiful collection of heartfelt poems and short stories.",
  openGraph: {
    title: "Anhad - Poetry & Stories Collection",
    description: "Read soul-touching poems and stories in a clean, elegant reading experience.",
    url: SITE_URL,
    siteName: "Anhad Poetry",
    images: [
      {
        url: `${SITE_URL}/anhad.jpeg`, // Ye image public folder mein honi chahiye
        width: 1200,
        height: 630,
        alt: "Anhad Poetry Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anhad - Poetry & Stories Collection",
    description: "Explore a beautiful collection of heartfelt poems and short stories.",
    images: [`${SITE_URL}/anhad.jpeg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Noto+Serif+Devanagari:wght@400;600&family=Amiri:ital@0;1&display=swap" rel="stylesheet" />
        <style>{`
          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-hindi { font-family: 'Noto Serif Devanagari', serif; }
          .font-urdu { font-family: 'Amiri', serif; }
        `}</style>
      </head>
      <body className="bg-[#FFFFFF] text-[#1A1A1A] antialiased">
        {children}
      </body>
    </html>
  );
}