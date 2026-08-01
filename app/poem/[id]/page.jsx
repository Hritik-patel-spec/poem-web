// app/poem/[id]/page.jsx
import { poemsData } from '@/data/poems';
import Link from 'next/link';

export default async function PoemDetail({ params }) {
  const resolvedParams = await params;
  const poemId = resolvedParams.id;

  // ID ke hisaab se apne aap data nikal lega
  const poem = poemsData.find((p) => p.id === poemId);

  if (!poem) {
    return (
      <div className="min-h-screen bg-[#2D1B2D] text-white p-10 flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Poem nahi mili bhai!</h1>
        <Link href="/" className="text-purple-300 underline">Home par wapas jayein</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2D1B2D] text-white p-8 md:p-16">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="text-purple-300 hover:text-white text-sm">
          &larr; Back to Home
        </Link>
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-purple-200">
          {poem.title}
        </h1>
        <div className="space-y-3 font-serif text-purple-300 text-xl italic border-l-2 border-purple-500 pl-4">
          {poem.lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <p className="text-xs tracking-widest uppercase font-mono text-purple-400 pt-8">
          ~ RITIK PATEL &apos;ANHAD&apos;
        </p>
      </div>
    </div>
  );
}