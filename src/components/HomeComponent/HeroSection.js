"use client";
import Image from "next/image";
import SearchBar from "@/components/HomeComponent/SearchBar";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] w-full">
      {/* background */}
      <Image
          src="/images/h.jpg"
        alt="Pakistan skyline"
        fill
        priority
        className="object-cover object-center" />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Search properties for sale in Pakistan
        </h1>
        <SearchBar />
      </div>
    </section>
  );
}
