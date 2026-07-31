"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { poemsData } from "@/data/poems";
import { storiesData } from "@/data/stories";

import "swiper/css";
import "swiper/css/navigation";

export default function StoriePage() {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

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

      {/* 2. STORIES SLIDER WITH COUNTER */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center relative flex-1 flex flex-col justify-center">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-10">
          SHORT STORIES COLLECTION
        </p>

        <button
          id="story-slide-prev"
          aria-label="Previous Story"
          className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 text-3xl text-gray-400 hover:text-black transition cursor-pointer p-2"
        >
          &#10094;
        </button>

        <button
          id="story-slide-next"
          aria-label="Next Story"
          className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 text-3xl text-gray-400 hover:text-black transition cursor-pointer p-2"
        >
          &#10095;
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: "#story-slide-prev",
            nextEl: "#story-slide-next",
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
          className="py-4 w-full"
        >
          {storiesData.map((story) => (
            <SwiperSlide key={story.id}>
              <div className="p-8 md:p-12 border border-gray-200 rounded-xl bg-gray-50 text-left shadow-sm min-h-[400px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-serif border-b pb-4 border-gray-200">
                    {story.title}
                  </h3>
                  
                  {/* Book-like Left Aligned Paragraph Layout */}
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

        {/* COUNTER */}
        <div className="mt-8 text-xs font-bold tracking-widest text-gray-500 uppercase bg-gray-50 inline-block px-4 py-2 rounded-full border border-gray-200 mx-auto">
          <span className="text-black">{currentIndex}</span> / {storiesData.length}
        </div>
      </section>

      {/* 3. FOOTER */}
      <footer className="py-6 px-8 border-t border-gray-100 text-center text-xs text-gray-400 uppercase tracking-widest bg-white">
        © {new Date().getFullYear()} Anhad. All rights reserved.
      </footer>
    </div>
  );
}