"use client";

import React, { useState } from "react";
import Link from "next/link";
import { poemsData } from "@/data/poems";
import { storiesData } from "@/data/stories";

export default function AboutPage() {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
     {/* 1. HEADER */}
<header className="border-b border-gray-200 px-8 py-4 flex items-center justify-between text-xs tracking-wider uppercase relative z-50 bg-white">
  <div className="flex items-center gap-12">
    <Link
      href="/"
      className="text-2xl font-bold font-playfair lowercase tracking-normal text-black cursor-pointer"
    >
      anhad
    </Link>

    <nav className="flex items-center gap-8 text-gray-800 font-semibold">
      <Link href="/about" className="text-[#E21B4D] transition-colors">
        About Author
      </Link>

      <div className="relative cursor-pointer py-2">
        <button 
          onClick={() => setIsCollectionOpen(!isCollectionOpen)}
          className="flex items-center gap-1 hover:text-[#E21B4D] transition-colors font-semibold uppercase"
        >
          Collection
          <span
            className="text-[10px] transition-transform duration-200 inline-block"
            style={{
              transform: isCollectionOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▼
          </span>
        </button>

        {isCollectionOpen && (
          <div className="absolute top-full left-0 w-44 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
            <Link
              href="/poempage"
              onClick={() => setIsCollectionOpen(false)}
              className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#E21B4D] transition-colors"
            >
              Poems ({poemsData.length})
            </Link>
            <Link
              href="/storiepage"
              onClick={() => setIsCollectionOpen(false)}
              className="block px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#E21B4D] transition-colors"
            >
              Short Stories ({storiesData.length})
            </Link>
          </div>
        )}
      </div>
    </nav>
  </div>

  {/* Connect Purple Button */}
  <div>
    <Link
      href="/connect"
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-semibold shadow-sm transition-colors"
    >
      Connect
    </Link>
  </div>
</header>

      {/* 2. ABOUT CONTENT SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Author Circular Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-100 rounded-full overflow-hidden shadow-xl border-4 border-gray-100 flex-shrink-0">
            <img
              src="/hritik2.png"
              alt="Ritik Patel 'Anhad'"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Author Bio details */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-[#E21B4D] font-semibold">
              MEET THE WRITER
            </p>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900">
              Ritik Patel 'Anhad'
            </h1>
            <p className="text-gray-600 font-serif leading-relaxed text-base md:text-lg">
              Kalam se jude ehsaas aur khamoshiyon ko shabdon ka roop dene ka safar hi 'Anhad' hai. Zindagi ke alag-alag pehluon, jazbaaton aur yaadon ko shayari aur kahaniyon ke zariye bayaan karne ki ek choti si koshish.
            </p>
            <p className="text-gray-600 font-serif leading-relaxed text-base md:text-lg">
              Yahan aapko mere dil ke kareeb likhi gayi kavitaayein aur rochak laghu kathayein milengi. Ummeed hai ye lafz aapke dil ko bhi chu jayenge.
            </p>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#E21B4D] transition-colors"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOOTER */}
      <footer className="py-6 px-8 border-t border-gray-100 text-center text-xs text-gray-400 uppercase tracking-widest bg-white">
        © {new Date().getFullYear()} Anhad. All rights reserved.
      </footer>
    </div>
  );
}