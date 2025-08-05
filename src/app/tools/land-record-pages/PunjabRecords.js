"use client";

const punjabData = [
  { owner: "Ali Khan", plot: "PK-01", cnic: "35202-1234567-1", area: "5 Marla", location: "Lahore" },
  { owner: "Ayesha Malik", plot: "PK-02", cnic: "35202-9999999-2", area: "10 Marla", location: "Faisalabad" },
];

export default function PunjabRecords() {
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
          {punjabData.map((record, i) => (
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
