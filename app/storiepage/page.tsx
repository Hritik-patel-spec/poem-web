"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";

import { poemsData } from "@/data/poems";
import { storiesData } from "@/data/stories";

import "swiper/css";
import "swiper/css/navigation";

export default function StoriePage() {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);

  const totalStories = storiesData.length;

  const handlePrev = () => {
    if (swiperRef) swiperRef.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef) swiperRef.slideNext();
  };

  // Function to generate pagination numbers with ellipsis (...)
  const getPaginationPages = () => {
    const pages: (number | string)[] = [];
    if (totalStories <= 7) {
      for (let i = 0; i < totalStories; i++) pages.push(i);
    } else {
      pages.push(0);
      if (currentIndex > 2) pages.push("...");
      
      const start = Math.max(1, currentIndex - 1);
      const end = Math.min(totalStories - 2, currentIndex + 1);
      
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      
      if (currentIndex < totalStories - 3) pages.push("...");
      if (!pages.includes(totalStories - 1)) pages.push(totalStories - 1);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-purple-600 selection:text-white">
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

        <div>
          <Link
            href="/connect"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-semibold shadow-sm transition-colors"
          >
            Connect
          </Link>
        </div>
      </header>

      {/* 2. STORIES SLIDER SECTION WITH FIXED ARROWS */}
      <section className="py-12 px-6 max-w-4xl mx-auto w-full relative flex-1 flex flex-col justify-center items-center my-auto">
        {/* Left Fixed Arrow Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Story"
          className="fixed left-4 md:left-12 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-800 p-3.5 rounded-full shadow-lg transition-colors z-40 cursor-pointer"
        >
          ❮
        </button>

        {/* Right Fixed Arrow Button */}
        <button
          onClick={handleNext}
          aria-label="Next Story"
          className="fixed right-4 md:right-12 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-purple-600 hover:text-white text-gray-800 p-3.5 rounded-full shadow-lg transition-colors z-40 cursor-pointer"
        >
          ❯
        </button>

        {/* Swiper Content */}
        <div className="w-full max-w-3xl px-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6 text-center">
            SHORT STORIES COLLECTION
          </p>

          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperRef}
            onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
            className="py-4 w-full"
          >
            {storiesData.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="p-8 md:p-12 border border-gray-200 rounded-xl bg-gray-50 text-left shadow-sm min-h-[400px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif border-b pb-4 border-gray-200">
                      {story.title}
                    </h3>
                    
                    <div className="text-base md:text-lg text-gray-800 leading-relaxed font-serif space-y-6">
                      {(story.content || story.excerpt).split("\n\n").map((para, index) => (
                        <p key={index} className="text-left indent-6">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs font-bold tracking-widest uppercase text-gray-900 pt-8 text-right">
                    ~ {story.author || "RITIK PATEL 'ANHAD'"}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 3. STICKY PAGINATION / NAVIGATION NUMBERS */}
      <footer className="sticky bottom-0 z-40 py-4 px-6 border-t border-gray-100 bg-white shadow-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-center gap-2 md:gap-4 overflow-x-auto py-1">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="text-xs md:text-sm font-medium text-gray-600 hover:text-purple-600 px-2 py-1 transition-colors whitespace-nowrap cursor-pointer"
          >
            ← Prev
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-1 md:gap-2">
            {getPaginationPages().map((page, idx) => {
              if (page === "...") {
                return (
                  <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 text-sm select-none">
                    …
                  </span>
                );
              }

              const pageIndex = page as number;
              const isActive = currentIndex === pageIndex;

              return (
                <button
                  key={pageIndex}
                  onClick={() => {
                    setCurrentIndex(pageIndex);
                    if (swiperRef) swiperRef.slideTo(pageIndex);
                  }}
                  className={`min-w-[32px] h-8 px-2 rounded text-xs md:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-purple-600 text-white shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {pageIndex + 1}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="text-xs md:text-sm font-medium text-gray-600 hover:text-purple-600 px-2 py-1 transition-colors whitespace-nowrap cursor-pointer"
          >
            Next →
          </button>
        </div>
      </footer>

      {/* 4. COPYRIGHT FOOTER */}
      <footer className="py-3 px-8 border-t border-gray-100 text-center text-xs text-gray-400 uppercase tracking-widest bg-white">
        © {new Date().getFullYear()} Anhad. All rights reserved.
      </footer>
    </div>
  );
}
