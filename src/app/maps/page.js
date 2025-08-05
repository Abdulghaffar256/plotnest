'use client';
import { useState } from 'react';
import CitySocietySearch from '@/components/Smap/CitySocietySearch';
import SocietyMapView from '@/components/Smap/SocietyMapView';
import { societyCoords } from '@/components/Smap/societyCoords';

export default function SocietyMapsPage() {
  const [coords, setCoords] = useState(null);

  const handleSelect = async (query) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setCoords([parseFloat(lat), parseFloat(lon)]);
      } else {
        alert("Location not found.");
      }
    } catch (err) {
      console.error("Geocoding failed:", err);
    }
  };

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pakistan Society Maps</h1>
      <CitySocietySearch onSelect={handleSelect} />
      <SocietyMapView coords={coords} />
    </main>
  );
}