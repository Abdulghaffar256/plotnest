"use client";

import { useState } from "react";
import PunjabRecords from "./PunjabRecords";
import SindhRecords from "./SindhRecords";
import KPKRecords from "./KPKRecords";
import RecordModal from "./RecordModal";

export default function LandRecordsMainPage() {
  const [showModal, setShowModal] = useState(false);
  const [province, setProvince] = useState("");

  const openModal = (prov) => {
    setProvince(prov);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Land Record Pages
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Select a province to view and manage its land records.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <button
          onClick={() => openModal("Punjab")}
          className="p-6 border rounded-lg shadow hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">Punjab</h2>
          <p className="text-gray-500">View Punjab&apos;s land records</p>
        </button>

        <button
          onClick={() => openModal("Sindh")}
          className="p-6 border rounded-lg shadow hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">Sindh</h2>
          <p className="text-gray-500">View Sindh&apos;s land records</p>
        </button>

        <button
          onClick={() => openModal("KPK")}
          className="p-6 border rounded-lg shadow hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold mb-2">KPK</h2>
          <p className="text-gray-500">View KPK&apos;s land records</p>
        </button>
      </div>

      {/* Modal */}
      <RecordModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={`${province} Land Records`}
      >
        {province === "Punjab" && <PunjabRecords />}
        {province === "Sindh" && <SindhRecords />}
        {province === "KPK" && <KPKRecords />}
      </RecordModal>
    </div>
  );
}
