"use client";
import dynamic from "next/dynamic";

// ✅ Load Mapcom only in the browser
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
