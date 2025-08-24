"use client";
import dynamic from "next/dynamic";

// ✅ Load MapComponent only on the client, never on the server
const MapComponent = dynamic(() => import("@/components/Maps/Mapcom"), {
  ssr: false,
});

export default function PlotFinderPage() {
  return (
    <div className="h-screen">
      <MapComponent />
    </div>
  );
}
