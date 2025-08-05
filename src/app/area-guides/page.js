"use client";

import { useState } from "react";
import SocietyCardGrid from "@/components/society/SocietyCardGrid";

const allSocieties = [
  { name: "Lahore Smart City", city: "Lahore", image: "/images/smartcity.jpg" },
  { name: "Central Park", city: "Lahore", image: "/images/centralpark.jpg" },
  { name: "DHA Defence", city: "Lahore", image: "/images/dha.jpg" },
  { name: "Bahria Town", city: "Lahore", image: "/images/bahria.jpg" },
  { name: "Lake City", city: "Lahore", image: "/images/lakecity.jpg" },
  { name: "Clifton", city: "Karachi", image: "/images/clifton.jpg" },
  { name: "Gulshan-e-Iqbal", city: "Karachi", image: "/images/gulshan.jpg" },
  { name: "Bahria Town", city: "Karachi", image: "/images/btk.jpg" },
  { name: "F-11", city: "Islamabad", image: "/images/f11.jpg" },
  { name: "DHA Islamabad", city: "Islamabad", image: "/images/dhaisbd.jpg" },
];

export default function AreaGuidance() {
  const [selectedCity, setSelectedCity] = useState("Lahore");

  const filteredSocieties = allSocieties.filter(
    (society) => society.city === selectedCity
  );

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-10">

      {/* 🔷 HEADER WITH BACKGROUND IMAGE */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white mb-10 rounded-xl overflow-hidden"
        style={{ backgroundImage: "url('/images/area-header.jpg')" }}
      >
        <div className="absolute inset-0 bg-green-950 bg-opacity-50" />
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold">Explore Societies in Pakistan</h1>
          <p className="text-gray-200 mt-4 text-lg">
            Zameen clone provides a wide choice of societies in Pakistan.
          </p>
        </div>
      </section>

      {/* 🔶 FILTER CONTROLS */}
      <div className="mt-8 max-w-3xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm px-6 py-5 flex flex-col md:flex-row items-center gap-4">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full md:w-40 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option>Lahore</option>
          <option>Karachi</option>
          <option>Islamabad</option>
        </select>

        <input
          type="text"
          placeholder="Search Societies"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />

        <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-2 rounded-md transition">
          Search
        </button>
      </div>

      {/* 🏘️ SOCIETIES SCROLLER */}
      <SocietyCardGrid societies={filteredSocieties} />

     {/* 📌 BENEFITS */}
<section className="mt-20 text-center">
  <h2 className="text-3xl font-semibold">Find Where Life Truly Begins</h2>
  <p className="text-gray-600 mt-2">
    Discover vibrant neighborhoods, compare amenities, and make confident decisions with our in-depth area guides.
  </p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
    {/* Benefit 1 */}
    <div className="flex flex-col items-center">
      <img src="/images/c:\Users\Dell\Pictures\map-icon.png" alt="Society Maps" className="w-20 h-20 rounded-full mb-4 shadow" />
      <h4 className="text-lg font-semibold mb-2">Interactive Society Maps</h4>
      <p className="text-gray-600 max-w-xs">
        Navigate detailed maps of housing societies, view block layouts, and explore planned roads and parks all in one place.
      </p>
    </div>

    {/* Benefit 2 */}
    <div className="flex flex-col items-center">
      <img src="/images/amenities-icon.png" alt="Amenities" className="w-20 h-20 rounded-full mb-4 shadow" />
      <h4 className="text-lg font-semibold mb-2">Essential Local Amenities</h4>
      <p className="text-gray-600 max-w-xs">
        Instantly locate schools, hospitals, markets, and other nearby services that bring ease and comfort to your lifestyle.
      </p>
    </div>

    {/* Benefit 3 */}
    <div className="flex flex-col items-center">
      <img src="/images/price-icon.png" alt="Prices" className="w-20 h-20 rounded-full mb-4 shadow" />
      <h4 className="text-lg font-semibold mb-2">Real-Time Price Insights</h4>
      <p className="text-gray-600 max-w-xs">
        Stay informed with up-to-date house and plot prices, whether you're buying, selling, or just exploring the market.
      </p>
    </div>
  </div>
</section>

      {/* 📊 TABS + LISTS */}
      <section className="mt-16">
        <div className="flex gap-4 border-b">
          {["Lahore", "Karachi", "Islamabad"].map((city) => (
            <button
              key={city}
              className={`pb-2 ${selectedCity === city ? "border-b-2 border-green-600 font-semibold" : ""}`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h4 className="font-bold mb-2">Most Viewed in {selectedCity}</h4>
            <ul className="text-green-600 list-disc ml-5">
              {filteredSocieties.slice(0, 3).map((s) => (
                <li key={s.name}>{s.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
