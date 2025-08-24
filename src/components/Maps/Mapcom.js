"use client";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// ✅ Safe Leaflet icon configuration
if (L.Icon.Default.prototype._getIconUrl) {
  delete L.Icon.Default.prototype._getIconUrl;
}

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const cities = {
  Lahore: [31.5497, 74.3436],
  Karachi: [24.8607, 67.0011],
  Islamabad: [33.6844, 73.0479],
  Multan: [30.1575, 71.5249],
};

// ✅ Change map center safely
function ChangeMapView({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (map) {
      map.setView(coords, 12);
    }
  }, [coords, map]);
  return null;
}

export default function Mapcom() {
  const [selectedCity, setSelectedCity] = useState("Lahore");
  const [isSatellite, setIsSatellite] = useState(false);

  return (
    <div className="h-screen w-full relative">
      {/* City Selector (Top Left) */}
      <div className="absolute top-4 left-4 z-[999] flex gap-4 bg-white shadow p-3 rounded">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border p-1 rounded"
        >
          {Object.keys(cities).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Satellite Toggle (Bottom Right) */}
      <div className="absolute bottom-4 right-4 z-[999]">
        <button
          onClick={() => setIsSatellite(!isSatellite)}
          className="border px-4 py-2 rounded bg-green-600 text-white shadow"
        >
          {isSatellite ? "Normal View" : "Satellite View"}
        </button>
      </div>

      {/* Map */}
      <MapContainer
        center={cities[selectedCity]}
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <ChangeMapView coords={cities[selectedCity]} />

        {isSatellite ? (
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri"
          />
        ) : (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
        )}

        <Marker position={cities[selectedCity]}>
          <Popup>{selectedCity}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
