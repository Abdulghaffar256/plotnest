"use client";
import Link from "next/link";
import Image from "next/image";

export default function CalculatorHighlightCard() {
  return (
    <section className="mt-16 px-6">
      <div className="bg-white rounded-xl shadow-md flex flex-col lg:flex-row items-center justify-between p-6 max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-green-700 mb-2">
            Construction Cost Calculator
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            Want to learn more about Zameen.com’s Construction Cost Calculator
            and build your dream house?
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Flexibility of Area Size and Units</li>
            <li>Separate Estimates for Grey Structure and Complete House</li>
            <li>Multiple Construction Modes</li>
            <li>Flexibility to Change the Number of Rooms</li>
          </ul>

          <Link
            href="/tools/costdetail"
            className="inline-block mt-4 px-4 py-2 text-sm text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors"
          >
            Read More →
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-60 mt-6 lg:mt-0 lg:ml-6">
          <Image
            src="/construction-cost-illustration.png"
            alt="Illustration showing house construction cost calculator"
            width={240}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
