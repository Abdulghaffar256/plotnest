export default function CostCalculatorDetailsPage() {
  return (
    <div className="bg-white min-h-screen py-10 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Construction Cost Calculator - Details
      </h1>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Our Construction Cost Calculator is designed to give you a clear and accurate
        estimate of what it will cost to build your home in Pakistan. From grey structure
        to finishing touches, our tool helps you break down your budget efficiently.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">
        Key Features:
      </h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Customize area size in Marla, Kanal, Sq. Ft., or Sq. Yard</li>
        <li>Choose between grey structure or complete house estimates</li>
        <li>Estimate material cost based on premium or basic quality</li>
        <li>Calculate based on your construction mode: self-managed or contractor</li>
        <li>Dynamic room count options to suit your needs</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-2">
        How It Works:
      </h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li>Select your city for region-specific pricing.</li>
        <li>Enter the area of the house and select the unit.</li>
        <li>Choose the quality of materials (Basic / Premium).</li>
        <li>Click “Calculate” to get instant breakdown.</li>
      </ol>

      <p className="mt-6 text-gray-600">
        This tool is especially useful for first-time builders and anyone planning their
        construction project within a budget. It helps avoid surprises and enables better
        planning for labor, materials, and contractor services.
      </p>
    </div>
  );
}
