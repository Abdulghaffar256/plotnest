"use client";

const areaData = Array.from({ length: 20 }, (_, i) => {
  const marla = i + 1;
  return {
    marla,
    kanal: marla * 0.05,
    sqft: marla * 225,
    sqm: marla * 21,
    sqyd: marla * 25,
  };
});

export default function AreaUnitReference() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          📐 Area Unit Reference Table (Pakistan)
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          A helpful guide to compare area measurements commonly used in Pakistan.
        </p>

        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full border border-green-100 text-sm">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="px-4 py-2 text-left border">Marla</th>
                <th className="px-4 py-2 text-left border">Kanal</th>
                <th className="px-4 py-2 text-left border">Sq. Feet</th>
                <th className="px-4 py-2 text-left border">Sq. Meter</th>
                <th className="px-4 py-2 text-left border">Sq. Yard</th>
              </tr>
            </thead>
            <tbody>
              {areaData.map((row) => (
                <tr key={row.marla} className="border-t">
                  <td className="px-4 py-2 border">{row.marla}</td>
                  <td className="px-4 py-2 border">{row.kanal.toFixed(2)}</td>
                  <td className="px-4 py-2 border">{row.sqft.toLocaleString()}</td>
                  <td className="px-4 py-2 border">{row.sqm}</td>
                  <td className="px-4 py-2 border">{row.sqyd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Popular Conversions */}
        <div className="border-t pt-6 mt-10">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">🔁 Popular Conversions</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              "1 Kanal to Marla", "Marla to Kanal", "Square Feet to Square Meters",
              "1 Square Yard to Square Feet", "Square Yards to Square Meters",
              "Acre to Kanal", "Murabba to Kanal", "Murabba to Acre",
              "Kanal to Acre", "Square Meter to Square Feet",
              "Hectare to Kanal", "Square Feet to Acre",
            ].map((item, idx) => (
              <span
                key={idx}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
