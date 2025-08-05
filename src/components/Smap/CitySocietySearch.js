'use client';
import { useState, useEffect } from 'react';

const societies = {
  Lahore: ["Bahria Town Lahore", "DHA Phase 4", "Al Rehman Garden Phase 2"],
  Karachi: ["Bahria Town Karachi", "DHA Phase 8"],
};

export default function CitySocietySearch({ onSelect }) {
  const [city, setCity] = useState("Lahore");
  const [society, setSociety] = useState(societies["Lahore"][0]);

  useEffect(() => {
    const defaultSociety = societies[city][0];
    setSociety(defaultSociety);
    onSelect(`${defaultSociety}, ${city}`);
  }, [city]);

  useEffect(() => {
    onSelect(`${society}, ${city}`);
  }, [society]);

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col md:flex-row gap-3 items-center">
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded w-full md:w-1/3"
      >
        {Object.keys(societies).map((cityName) => (
          <option key={cityName} value={cityName}>{cityName}</option>
        ))}
      </select>

      <select
        value={society}
        onChange={(e) => setSociety(e.target.value)}
        className="border p-2 rounded w-full md:w-2/3"
      >
        {societies[city].map((societyName) => (
          <option key={societyName} value={societyName}>{societyName}</option>
        ))}
      </select>
    </div>
  );
}
