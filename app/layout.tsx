import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rekhta Style Poetry Platform",
  description: "Authentic Rekhta UI",
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