"use client";

import React, { useState } from "react";
import Link from "next/link";
import { poemsData } from "@/data/poems";
import { storiesData } from "@/data/stories";

export default function PoemPage() {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const currentPoem = poemsData[currentIndex];
  const totalPoems = poemsData.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPoems - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPoems - 1 ? 0 : prev + 1));
  };

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

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

      {/* 2. POEM SLIDER SECTION WITH SWIPE SUPPORT */}
      <section 
        className="py-12 px-6 max-w-3xl mx-auto w-full relative flex-1 flex flex-col justify-center items-center select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Poem"
          className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-[#E21B4D] hover:text-white text-gray-800 p-3 rounded-full shadow-md transition-colors z-10 cursor-pointer"
        >
          ❮
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next Poem"
          className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-[#E21B4D] hover:text-white text-gray-800 p-3 rounded-full shadow-md transition-colors z-10 cursor-pointer"
        >
          ❯
        </button>

        {/* Poem Content */}
        <div className="text-center w-full px-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
            POEMS COLLECTION
          </p>

          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#E21B4D] mb-8">
            {currentPoem.title}
          </h2>

          <div className="space-y-3 font-serif text-gray-700 text-lg md:text-xl italic leading-relaxed">
            {currentPoem.lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SLIDE COUNT / NAVIGATION NUMBERS */}
      <footer className="py-8 px-6 border-t border-gray-100 mt-12 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-3">
          <p className="text-xs tracking-widest text-gray-500 uppercase font-semibold">
            Slide {currentIndex + 1} of {totalPoems}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 max-h-32 overflow-y-auto p-2">
            {poemsData.map((poem, index) => (
              <button
                key={poem.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-8 h-8 rounded-full text-xs font-semibold transition-all ${
                  currentIndex === index
                    ? "bg-[#E21B4D] text-white shadow-md scale-110"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                title={poem.title}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* 4. FOOTER */}
      <footer className="py-6 px-8 border-t border-gray-100 text-center text-xs text-gray-400 uppercase tracking-widest bg-white">
        © {new Date().getFullYear()} Anhad. All rights reserved.
      </footer>
    </div>
  );
}