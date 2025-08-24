'use client';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon bug
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

// Helper to change map center
function ChangeMapView({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 15);
    }
  }, [coords]);
  return null;
}

export default function SocietyMapView({ coords }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // run only in browser
  }, []);

  if (!isClient) return <div className="h-[400px] w-full bg-gray-100">Loading map...</div>;

  return (
    <div className="mt-6 h-[400px] w-full">
      <MapContainer center={coords || [31.5204, 74.3587]} zoom={13} scrollWheelZoom className="h-full w-full">
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coords && <Marker position={coords} />}
        <ChangeMapView coords={coords} />
      </MapContainer>
    </div>
  );
}
