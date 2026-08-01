"use client";

import React, { useState } from "react";
import Link from "next/link";
import { poemsData } from "@/data/poems";
import { storiesData } from "@/data/stories";

export default function ConnectPage() {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
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

      {/* 2. CONNECT CONTENT SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
          Get in Touch
        </p>
        <h1 className="text-3xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
          Connect with Anhad
        </h1>
        <p className="text-gray-600 font-serif text-base md:text-lg mb-10 leading-relaxed">
          Safar, kavitayein, ya vichar agar aapko kuch bhi kehna ya judna ho, toh aap naye madhyamon ke zariye seedhe sampark kar sakte hain.
        </p>

        {/* Social / Direct Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/byanhad?igsh=MW9veW9yaHhmNTBvdg=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-gray-200 rounded-xl hover:border-purple-600 hover:shadow-md transition-all group flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border border-purple-200 mb-4 group-hover:scale-105 transition-transform">
              <img
                src="/anhad.jpeg"
                alt="Anhad Instagram"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
            <p className="text-xs text-gray-500">@byanhad</p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:mailtohritikpatel@gmail.com"
            className="p-6 border border-gray-200 rounded-xl hover:border-purple-600 hover:shadow-md transition-all group flex flex-col items-center"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border border-purple-200 mb-4 group-hover:scale-105 transition-transform">
              <img
                src="/anhad.jpeg"
                alt="Anhad Instagram"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-xs text-gray-500">mailtohritikpatel@gmail.com</p>
          </a>
        </div>
      </main>

      {/* 3. FOOTER */}
      <footer className="py-6 px-8 border-t border-gray-100 text-center text-xs text-gray-400 uppercase tracking-widest bg-white">
        © {new Date().getFullYear()} Anhad. All rights reserved.
      </footer>
    </div>
  );
}