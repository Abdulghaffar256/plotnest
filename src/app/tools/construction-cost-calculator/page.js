"use client";

import { useState } from "react";
import CostCalculatorHero from "@/components/tool/cost/CostCalculatorHero";
import CostInputSection from "@/components/tool/cost/CostInputSection";
import PopularCalculations from "@/components/tool/cost/PopularCalculations";
import CostBreakdownChart from "@/components/tool/cost/CostBreakdownChart";
import ConstructionTips from "@/components/tool/cost/ConstructionTips";
import CalculatorHighlightCard from "@/components/tool/cost/CalculatorHighlightCard";
import AboutCalculatorSection from "@/components/tool/cost/AboutCalculatorSection";

export default function ConstructionCostCalculatorPage() {
  const [breakdown, setBreakdown] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Lahore");
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCalculate = (city, area, unit) => {
    setSelectedCity(city);

    const areaFloat = parseFloat(area.replace(/,/g, ""));
    if (isNaN(areaFloat) || areaFloat <= 0) {
      alert("Please enter a valid area size.");
      return;
    }

    let marlaArea = 0;
    switch (unit) {
      case "Marla":
        marlaArea = areaFloat;
        break;
      case "Kanal":
        marlaArea = areaFloat * 20;
        break;
      case "Sq. ft.":
        marlaArea = areaFloat / 225;
        break;
      case "Sq. yard":
        marlaArea = areaFloat / 25;
        break;
      default:
        alert("Invalid unit");
        return;
    }

    const breakdownData = [
      { label: "Foundation & Structure", value: +(marlaArea * 5.65).toFixed(2) },
      { label: "Wood, Metal & Tile Works", value: +(marlaArea * 3.2).toFixed(2) },
      { label: "Electrical Works", value: +(marlaArea * 1.2).toFixed(2) },
      { label: "Plumbing Works", value: +(marlaArea * 1.1).toFixed(2) },
      { label: "Fittings & Fixtures", value: +(marlaArea * 0.8).toFixed(2) },
    ];

    const total = breakdownData.reduce((sum, item) => sum + item.value, 0);

    setBreakdown(breakdownData);
    setTotalAmount(+total.toFixed(2));
  };

  return (
    <div className="bg-[#f6fef7] min-h-screen pb-10">
      <CostCalculatorHero />
      <CostInputSection onCalculate={handleCalculate} />

      {/* Conditionally show the chart only */}
      {breakdown && (
        <div className="mt-10 px-6">
          <h2 className="text-center text-xl font-semibold text-gray-700">
            📊 Estimated Construction Cost Breakdown
          </h2>
          <CostBreakdownChart breakdown={breakdown} />
        </div>
      )}

      {/* Always visible regardless of chart */}
      <div className="mt-10 px-6">
        <PopularCalculations selectedCity={selectedCity} />
        <ConstructionTips />
        <CalculatorHighlightCard />
        <AboutCalculatorSection />
      </div>
    </div>
  );
}
