"use client";

import { useState } from "react";
import { FaRulerCombined, FaExchangeAlt, FaInfoCircle, FaSync } from "react-icons/fa";
import AreaConverterTool from "@/components/tool/areaunit/Area";

const conversionRates = {
  Marla: {
    Kanal: 0.05,
    "Square Feet": 225,
    "Square Meter": 21,
    "Square Yard": 25,
  },
  Kanal: {
    Marla: 20,
    "Square Feet": 4500,
    "Square Meter": 420,
    "Square Yard": 500,
  },
  "Square Feet": {
    Marla: 1 / 225,
    Kanal: 1 / 4500,
    "Square Meter": 0.092903,
    "Square Yard": 1 / 9,
  },
  "Square Meter": {
    "Square Feet": 10.7639,
    Marla: 1 / 21,
    Kanal: 1 / 420,
    "Square Yard": 1.19599,
  },
  "Square Yard": {
    Marla: 1 / 25,
    Kanal: 1 / 500,
    "Square Feet": 9,
    "Square Meter": 0.836127,
  },
};

const marketPrices = {
  Marla: 500000,
  Kanal: 10000000,
  "Square Feet": 2500,
  "Square Meter": 27000,
  "Square Yard": 22500,
};

export default function AreaUnitConverterPage() {
  const [fromValue, setFromValue] = useState(1);
  const [fromUnit, setFromUnit] = useState("Marla");
  const [toUnit, setToUnit] = useState("Square Feet");

  const convert = () => {
    if (fromUnit === toUnit) return fromValue;
    const rate = conversionRates[fromUnit]?.[toUnit];
    return rate ? fromValue * rate : 0;
  };

  const estimatedMarketValue = () => {
    const unitPrice = marketPrices[fromUnit];
    return unitPrice ? fromValue * unitPrice : 0;
  };

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl relative">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-green-700 mb-4 flex items-center justify-center gap-3">
          <FaRulerCombined className="text-green-600" />
          Area Unit Converter
        </h1>
        <p className="text-center text-sm text-gray-600 mb-8 flex justify-center items-center gap-2">
          Convert between Marla, Kanal, Square Feet, Square Meter, and Square Yard
          <FaInfoCircle className="text-gray-400" />
        </p>

        {/* Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          {/* From */}
          <div className="bg-gray-50 p-5 rounded-lg shadow-md">
            <label className="block mb-2 font-medium text-gray-700">From</label>
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(Number(e.target.value))}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-3 focus:ring-2 focus:ring-green-400"
              min={0}
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-400"
            >
              {Object.keys(conversionRates).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>

          {/* To */}
          <div className="bg-gray-50 p-5 rounded-lg shadow-md relative">
            <label className="block mb-2 font-medium text-gray-700">To</label>
            <input
              type="text"
              value={convert().toFixed(2)}
              disabled
              className="w-full border border-gray-300 bg-gray-100 text-gray-800 rounded px-4 py-2 mb-3 font-semibold"
            />
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-green-400"
            >
              {Object.keys(conversionRates).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>

            {/* Swap Button */}
            <button
              onClick={swapUnits}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-green-100 hover:bg-green-200 p-2 rounded-full shadow-md transition"
              title="Swap units"
            >
              <FaSync className="text-green-600" />
            </button>
          </div>
        </div>

        {/* Summary Box */}
        <div className="mt-6 bg-green-100 text-green-800 rounded-lg p-4 text-center shadow-inner text-sm">
          <p>
            <strong>{fromValue}</strong> {fromUnit} = <strong>{convert().toFixed(2)}</strong> {toUnit}
          </p>
          <p className="mt-1">
            💰 Estimated Market Value:{" "}
            <span className="bg-green-200 text-green-900 px-2 py-1 rounded font-semibold">
              PKR {estimatedMarketValue().toLocaleString()}
            </span>
          </p>
        </div>

        {/* Reference Table */}
        <div className="mt-12">
          <AreaConverterTool />
        </div>
      </div>
    </div>
  );
}
