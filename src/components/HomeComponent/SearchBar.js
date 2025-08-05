"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";

export default function SearchBar() {
  const [mode, setMode] = useState("buy");
  const [showMore, setShowMore] = useState(false);

  const [city, setCity] = useState("Rawalpindi");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Homes");
  const [priceFrom, setPriceFrom] = useState("0");
  const [priceTo, setPriceTo] = useState("Any");
  const [areaFrom, setAreaFrom] = useState("0");
  const [areaTo, setAreaTo] = useState("Any");
  const [beds, setBeds] = useState("2");

  const submit = (e) => {
    e.preventDefault();
    console.log({ mode, city, location, propertyType, priceFrom, priceTo, areaFrom, areaTo, beds });
  };

  const Tab = ({ id, children }) => (
    <button
      type="button"
      onClick={() => setMode(id)}
      className={`flex-1 py-2 text-sm uppercase font-semibold border first:rounded-l-md last:rounded-r-md ${
        mode === id
          ? "bg-green-600 text-white"
          : "bg-white text-gray-700 hover:bg-green-50"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="bg-white py-10 px-4">
      <form
        onSubmit={submit}
        className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-xl"
      >
        {/* Tabs */}
        <div className="flex w-full overflow-hidden">
          <Tab id="buy">Buy</Tab>
          <Tab id="rent">Rent</Tab>
          <Tab id="projects">Projects</Tab>
        </div>

        {/* Row 1: City | Location | Property Type | Find */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4 border-b border-gray-200">
          {/* City */}
          <div className="relative">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full h-12 pl-10 pr-8 rounded border border-gray-300 focus:ring-2 focus:ring-green-500 text-black"
            >
              {["Rawalpindi", "Lahore", "Karachi", "Islamabad", "Peshawar"].map(
                (c) => (
                  <option key={c}>{c}</option>
                )
              )}
            </select>
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" />
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Location */}
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="h-12 px-4 rounded border border-gray-300 focus:ring-2 focus:ring-green-500 text-black placeholder:text-gray-500"
          />

          {/* Property Type */}
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="h-12 px-4 rounded border border-gray-300 focus:ring-2 focus:ring-green-500 text-black"
          >
            {["Homes", "Plots", "Commercial"].map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>

          {/* Find Button */}
          <button
            type="submit"
            className="h-12 w-full bg-green-600 text-white font-bold rounded hover:bg-green-700 transition-all"
          >
            FIND
          </button>
        </div>

        {/* Toggle Link */}
        <div className="flex justify-start px-4 py-2 text-sm text-gray-700 cursor-pointer select-none gap-1">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-1 text-blue-700 hover:underline"
          >
            {showMore ? (
              <>
                <ChevronUp size={16} />
                Less Options
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                More Options
              </>
            )}
          </button>
        </div>

        {/* Row 2: Price | Area | Beds */}
        {showMore && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4 pb-4">
            {/* Price */}
            <div className="flex items-center gap-1">
              <input
                type="number"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
                className="w-1/2 h-12 px-2 rounded border border-gray-300 text-black placeholder:text-gray-500"
                placeholder="0"
              />
              <span className="text-gray-600">to</span>
              <input
                type="text"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
                className="w-1/2 h-12 px-2 rounded border border-gray-300 text-black placeholder:text-gray-500"
                placeholder="Any"
              />
            </div>

            {/* Area */}
            <div className="flex items-center gap-1">
              <input
                type="number"
                value={areaFrom}
                onChange={(e) => setAreaFrom(e.target.value)}
                className="w-1/2 h-12 px-2 rounded border border-gray-300 text-black placeholder:text-gray-500"
                placeholder="0"
              />
              <span className="text-gray-600">to</span>
              <input
                type="text"
                value={areaTo}
                onChange={(e) => setAreaTo(e.target.value)}
                className="w-1/2 h-12 px-2 rounded border border-gray-300 text-black placeholder:text-gray-500"
                placeholder="Any"
              />
            </div>

            {/* Beds */}
            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="h-12 px-4 rounded border border-gray-300 focus:ring-2 focus:ring-green-500 text-black"
            >
              {[0, 1, 2, 3, 4, 5].map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
        )}

        {/* Footer Links */}
        <div className="flex justify-center items-center gap-4 text-sm text-blue-700 py-2 border-t border-gray-200">
          <button type="button" className="hover:underline">
            Change Currency
          </button>
          <span>|</span>
          <button type="button" className="hover:underline">
            Change Area Unit
          </button>
          <span>|</span>
          <button type="button" className="hover:underline">
            Reset Search
          </button>
        </div>
      </form>
    </div>
  );
}
