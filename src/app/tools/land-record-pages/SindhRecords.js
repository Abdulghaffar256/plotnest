"use client";

const sindhData = [
  { owner: "Ahmed Raza", plot: "SK-01", cnic: "42301-8765432-1", area: "1 Kanal", location: "Karachi" },
  { owner: "Hina Tariq", plot: "SK-02", cnic: "42301-1122334-4", area: "2 Kanal", location: "Hyderabad" },
];

export default function SindhRecords() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border border-gray-200">
        <thead className="bg-green-100 text-green-800 font-semibold">
          <tr>
            <th className="p-2 border">Owner</th>
            <th className="p-2 border">Plot #</th>
            <th className="p-2 border">CNIC</th>
            <th className="p-2 border">Area</th>
            <th className="p-2 border">Location</th>
          </tr>
        </thead>
        <tbody>
          {sindhData.map((record, i) => (
            <tr key={i} className="hover:bg-green-50">
              <td className="p-2 border">{record.owner}</td>
              <td className="p-2 border">{record.plot}</td>
              <td className="p-2 border">{record.cnic}</td>
              <td className="p-2 border">{record.area}</td>
              <td className="p-2 border">{record.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
