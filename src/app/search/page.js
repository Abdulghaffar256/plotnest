'use client';

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const mockResults = [
    { id: 1, title: "Luxury Villa in Karachi", location: "Karachi" },
    { id: 2, title: "2 Bedroom Flat in Lahore", location: "Lahore" },
    { id: 3, title: "Farmhouse near Islamabad", location: "Islamabad" },
  ];

  const filteredResults = mockResults.filter((item) =>
    item.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">
        Showing results for: "{query}"
      </h1>
      {filteredResults.length > 0 ? (
        <ul className="space-y-2">
          {filteredResults.map((item) => (
            <li
              key={item.id}
              className="border p-3 rounded hover:shadow-md transition"
            >
              <strong>{item.title}</strong> –{" "}
              <span className="text-gray-500">{item.location}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-600">No results found for "{query}".</p>
      )}
    </div>
  );
}
