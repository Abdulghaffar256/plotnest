"use client";

const calculationsByCity = {
  Lahore: [
    { marla: 3, size: "1,215 Sq. ft.", unit: "Marla" },
    { marla: 4, size: "1,620 Sq. ft.", unit: "Marla" },
    { marla: 5, size: "2,025 Sq. ft.", unit: "Marla" },
    { marla: 1, size: "5,445 Sq. ft.", unit: "Kanal" },
  ],
  Karachi: [
    { marla: 3, size: "1,240 Sq. ft.", unit: "Marla" },
    { marla: 5, size: "2,040 Sq. ft.", unit: "Marla" },
    { marla: 1, size: "5,500 Sq. ft.", unit: "Kanal" },
    { marla: 1800, size: "1,800 Sq. ft.", unit: "Sq. Ft." },
  ],
  Islamabad: [
    { marla: 4, size: "1,650 Sq. ft.", unit: "Marla" },
    { marla: 7, size: "2,678 Sq. ft.", unit: "Marla" },
    { marla: 2, size: "9,800 Sq. ft.", unit: "Kanal" },
  ],
  Rawalpindi: [],
};

export default function PopularCalculations({ selectedCity }) {
  const cityData = calculationsByCity[selectedCity] || [];

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Popular Construction Calculations in {selectedCity}
      </h2>

      {cityData.length === 0 ? (
        <p className="text-gray-500 text-sm">
          No popular calculations available for {selectedCity}.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cityData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <h4 className="font-medium text-gray-900">
                {item.marla} {item.unit} Construction Cost
              </h4>
              <p className="text-xs text-gray-600 mt-1">Double Story</p>
              <p className="text-xs text-gray-600">{item.size}</p>
              <div className="mt-2">
                <button className="text-sm text-green-600 underline">
                  Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
