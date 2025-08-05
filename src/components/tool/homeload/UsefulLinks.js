"use client";

export default function UsefulLinks() {
  const links = {
    "Houses for Sale": [
      "Lahore", "Rawalpindi", "Faisalabad", "Gwadar",
      "Islamabad", "Multan", "Hyderabad", "Peshawar",
      "Karachi", "Sahiwal", "Gujranwala", "Quetta",
    ],
    "Plots for Sale": [
      "Lahore", "Rawalpindi", "Faisalabad", "Gwadar",
      "Islamabad", "Multan", "Hyderabad", "Peshawar",
      "Karachi", "Sahiwal", "Gujranwala", "Quetta",
    ],
    "Flats for Sale": [
      "Lahore", "Rawalpindi", "Faisalabad", "Gwadar",
      "Islamabad", "Multan", "Hyderabad", "Peshawar",
      "Karachi", "Sahiwal", "Gujranwala", "Quetta",
    ],
  };

  return (
    <div className="bg-white py-12 px-6 mt-20 rounded-lg shadow max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Useful Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(links).map(([category, cities], idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold mb-4">{category}</h3>
            <ul className="space-y-2">
              {cities.map((city, i) => (
                <li key={i} className="text-green-700 hover:underline">
                  <a href="#">
                    ↗ {category.replace(" for Sale", "")} for Sale in {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
