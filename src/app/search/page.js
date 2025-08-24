"use client";

import { Suspense } from "react";
import SearchContent from "./SearchContent";

// Page wraps content in Suspense
export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-500">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
