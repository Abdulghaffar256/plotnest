"use client";

export default function RecordModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 text-xl font-bold hover:text-gray-800">
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 text-green-700">{title}</h2>
        {children}
      </div>
    </div>
  );
}
