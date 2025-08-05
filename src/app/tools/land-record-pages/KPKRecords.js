"use client";
import { useState } from "react";

const kpkMockRecords = [
  {
    owner: "Zahid Khan",
    plotNumber: "K-201",
    cnic: "17101-1234567-9",
    area: "5 Marla",
    location: "Peshawar",
  },
  {
    owner: "Shabana Gul",
    plotNumber: "K-202",
    cnic: "17202-2345678-1",
    area: "10 Marla",
    location: "Abbottabad",
  },
  {
    owner: "Haroon Afridi",
    plotNumber: "K-203",
    cnic: "17303-3456789-3",
    area: "1 Kanal",
    location: "Swat",
  },
  {
    owner: "Nazia Bibi",
    plotNumber: "K-204",
    cnic: "17404-4567890-5",
    area: "2 Kanal",
    location: "Mardan",
  },
];

export default function KPKRecords() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(kpkMockRecords);

  const handleSearch = (e) => {
    e.preventDefault();
    const term = searchTerm.toLowerCase();
    const results = kpkMockRecords.filter(
      (r) =>
        r.owner.toLowerCase().includes(term) ||
        r.plotNumber.toLowerCase().includes(term) ||
        r.cnic.includes(term) ||
        r.location.toLowerCase().includes(term)
    );
    setFiltered(results);
  };

  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-xl font-bold text-green-700 mb-4">📂 KPK Land Record Search</h2>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, CNIC, plot number or location"
          className="flex-1 border border-gray-300 rounded px-4 py-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded"
        >
          Search
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200">
          <thead className="bg-green-50 text-green-800 font-semibold">
            <tr>
              <th className="p-3 border">Owner</th>
              <th className="p-3 border">Plot #</th>
              <th className="p-3 border">CNIC</th>
              <th className="p-3 border">Area</th>
              <th className="p-3 border">Location</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-red-600">
                  No records found.
                </td>
              </tr>
            ) : (
              filtered.map((record, idx) => (
                <tr key={idx} className="hover:bg-green-50">
                  <td className="p-3 border">{record.owner}</td>
                  <td className="p-3 border">{record.plotNumber}</td>
                  <td className="p-3 border">{record.cnic}</td>
                  <td className="p-3 border">{record.area}</td>
                  <td className="p-3 border">{record.location}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-xs text-gray-500 text-center">
        📌 These are sample records for Khyber Pakhtunkhwa. For real data, consult the official Board of Revenue KPK.
      </div>
    </div>
  );
}
