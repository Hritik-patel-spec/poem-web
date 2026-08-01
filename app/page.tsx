"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { poemsData } from "@/data/poems";
import { storiesData } from "@/data/stories";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function anhadHome() {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  // Sirf pehli 3 latest poems hero slider ke liye
  const latestSlides = poemsData.slice(0, 3);

  // Latest poems aur stories sections ke liye
  const latestPoems = poemsData.slice(0, 1);
  const latestStories = storiesData.slice(0, 1);

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

      {/* 2. HERO BANNER SLIDER (3 Latest Poems with Clickable Link) */}
      <section className="bg-[#2D1B2D] text-white py-12 px-4 md:px-8 relative group">
        <button
          id="home-prev"
          aria-label="Previous Slide"
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 text-3xl text-purple-200/70 hover:text-white transition hover:scale-125 cursor-pointer p-2"
        >
          &#10094;
        </button>

        <button
          id="home-next"
          aria-label="Next Slide"
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 text-3xl text-purple-200/70 hover:text-white transition hover:scale-125 cursor-pointer p-2"
        >
          &#10095;
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: "#home-prev",
            nextEl: "#home-next",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="max-w-6xl mx-auto"
        >
          {latestSlides.map((poem) => (
            <SwiperSlide key={poem.id}>
              <Link href="/poempage" className="block cursor-pointer">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 px-10 md:px-16">
                  {/* Author Image */}
                  <div className="w-48 h-60 md:w-64 md:h-80 bg-gray-800 rounded overflow-hidden border border-purple-900 shadow-2xl flex-shrink-0">
                    <img
                      src="/hritik3.png"
                      alt={poem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Poem Details / Lines */}
                  <div className="flex-1 text-center md:text-left space-y-4">
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold text-purple-200 hover:text-white transition-colors">
                      {poem.title}
                    </h2>
                    
                    <div className="space-y-1 font-serif text-purple-300 text-lg md:text-xl italic">
                      <p>{poem.lines[0]}</p>
                      {poem.lines[1] && <p>{poem.lines[1]}</p>}
                    </div>

                    <p className="text-xs tracking-widest uppercase font-mono text-purple-300 pt-4">
                      ~ RITIK PATEL &apos;ANHAD&apos;
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 3. LATEST POEMS SECTION */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center border-b border-gray-100">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-10">
          LATEST POEMS (कलाम)
        </p>

        <div className="space-y-12">
          {latestPoems.map((poem) => (
            <div key={poem.id} className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-[#E21B4D] mb-4 font-serif">
                {poem.title}
              </h3>
              <div className="space-y-2 font-playfair italic text-xl md:text-2xl text-gray-800 leading-relaxed">
                {poem.lines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-gray-900 pt-4 not-italic">
                RITIK PATEL &apos;ANHAD&apos;
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/poempage"
            className="inline-block px-8 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#E21B4D] transition-colors"
          >
            Read More Poems →
          </Link>
        </div>
      </section>

      {/* 4. LATEST STORIES SECTION (Book Style Left Aligned Layout) */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-10">
          LATEST SHORT STORIES (लघु कथाएं)
        </p>

        <div className="space-y-8 text-left">
          {latestStories.map((story) => (
            <div key={story.id} className="p-8 md:p-12 border border-gray-200 rounded-xl bg-gray-50 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif border-b pb-4 border-gray-200">
                {story.title}
              </h3>
              
              <div className="text-base md:text-lg text-gray-800 leading-relaxed font-serif space-y-6">
                {(story.content || story.excerpt).split("\n\n").map((para, idx) => (
                  <p key={idx} className="text-left indent-6">
                    {para}
                  </p>
                ))}
              </div>

              <p className="text-xs font-bold tracking-widest uppercase text-gray-900 pt-8 text-right">
                ~ {story.author || "RITIK PATEL 'ANHAD'"}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/storiepage"
            className="inline-block px-8 py-3 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#E21B4D] transition-colors"
          >
            Read More Stories →
          </Link>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-6 px-8 border-t border-gray-100 text-center text-xs text-gray-400 uppercase tracking-widest bg-white">
        © {new Date().getFullYear()} Anhad. All rights reserved.
      </footer>
    </div>
  );
}