"use client";

import {
  Hammer,
  Layers,
  PackageCheck,
  Workflow,
  Calculator,
} from "lucide-react";

export default function ConstructionTips() {
  const tips = [
    {
      title: "Labour Quality",
      desc: "High quality & trained labor should be assigned.",
      icon: <Hammer className="h-8 w-8 text-green-600 mb-2" />,
    },
    {
      title: "Foundation Quality",
      desc: "No compromise on foundation quality.",
      icon: <Layers className="h-8 w-8 text-green-600 mb-2" />,
    },
    {
      title: "Building Material",
      desc: "Building material should be Premium Plus grade.",
      icon: <PackageCheck className="h-8 w-8 text-green-600 mb-2" />,
    },
    {
      title: "Construction Mode",
      desc: "Sourcing material yourself or outsourcing everything to a contractor.",
      icon: <Workflow className="h-8 w-8 text-green-600 mb-2" />,
    },
    {
      title: "Cost Calculator",
      desc: "Get quick cost estimate using our calculator.",
      icon: <Calculator className="h-8 w-8 text-green-600 mb-2" />,
    },
  ];

  return (
    <div className="mt-16 px-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Things to Keep In Mind While Constructing Your House
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
        Your house is often the hard-earned fruit of your life&apos;s work. Be absolutely sure about where, when, and how to build. Here&apos;s what you should keep in mind:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {tips.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow hover:shadow-lg transition rounded-xl p-4 text-center border border-gray-100 hover:border-green-300"
          >
            <div className="flex justify-center">{item.icon}</div>
            <div className="text-base font-semibold text-green-700 mt-2">
              {item.title}
            </div>
            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
