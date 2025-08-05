"use client";
import { useState } from "react";

export default function CostInputSection({ onCalculate }) {
  const [city, setCity] = useState("Lahore");
  const [area, setArea] = useState("");
  const [unit, setUnit] = useState("Marla");

  const cities = [
    "Lahore", "Karachi", "Islamabad", "Rawalpindi"

  ];

  const units = ["Marla", "Kanal", "Sq. ft.", "Sq. yard"];

  return (
    <div className="relative z-10 max-w-5xl mx-auto -mt-10 px-4">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-wrap items-center justify-between gap-4">
        {/* City Dropdown */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none"
          >
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Area Input */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Area Size</label>
          <input
            value={area}
            onChange={(e) => setArea(e.target.value)}
            type="text"
            placeholder="Enter Area Size"
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
          />
        </div>

        {/* Unit Dropdown */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="text-sm border border-gray-300 rounded px-2 py-1 focus:outline-none"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        {/* ✅ Call onCalculate here */}
        <button
          onClick={() => onCalculate(city, area, unit)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm"
        >
          Calculate Cost
        </button>

        <button className="text-green-600 text-sm underline">
          More Options ↓
        </button>
      </div>
    </div>
  );
}
