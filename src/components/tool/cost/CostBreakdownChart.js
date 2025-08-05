"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CostBreakdownChart({ breakdown }) {
  const data = {
    labels: breakdown.map((item) => item.label),
    datasets: [
      {
        data: breakdown.map((item) => item.value),
        backgroundColor: ["#4FD1C5", "#63B3ED", "#F6AD55", "#ED64A6", "#A3BFFA"],
        borderWidth: 1,
      },
    ],
  };

  const total = breakdown.reduce((acc, item) => acc + item.value, 0).toFixed(2);

  return (
    <div className="max-w-md mx-auto mt-8 bg-white rounded-xl shadow p-6">
      <Doughnut data={data} />

      <ul className="mt-6 space-y-1 text-sm text-gray-700">
        {breakdown.map((item) => (
          <li key={item.label}>
            <span className="font-semibold">{item.label}</span>: {item.value} Lakh
          </li>
        ))}
      </ul>

      {/* ✅ Total Amount Bar */}
      <div className="mt-6 border-t pt-4 text-center text-lg font-bold text-green-700">
        🏠 Total Estimated Cost: {total} Lakh PKR
      </div>
    </div>
  );
}
