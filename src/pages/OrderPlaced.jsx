import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderPlaced() {
  const location = useLocation();
  const navigate = useNavigate();
  const { shipping, total, orderNumber } = location.state || {};

  if (!shipping)
    return <p className="text-center mt-10">No order data found.</p>;

  return (
    <div className="max-w-xl mb-12 mx-auto mt-24 p-8 border border-gray-300 rounded shadow-md text-center bg-white">
      {/* Icon Circle */}
      <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-[#335451] relative shadow-lg flex items-center justify-center">
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        {/* Decorative dots */}
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-[#335451] rounded-full"
            style={{
              width: `${(i % 4) + 2}px`,
              height: `${(i % 4) + 2}px`,
              top: `${10 + i * 4}px`,
              left: `${10 + (i % 3) * 8}px`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-2">Thankyou for your ordering</h2>
      <p className="mb-1">
        We’ve received your order will ship in <strong>5-7 business days.</strong>
      </p>
      <p className="mb-6">Your order number is <strong>#{orderNumber ?? "Bh2300006"}</strong></p>

      <div className="flex justify-center gap-6">
        <button
          onClick={() => navigate("/orders")}
          className="border border-gray-500 text-black font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
        >
          View Order
        </button>
        <button
          onClick={() => navigate("/track-order")}
          className="bg-[#335451] text-white font-semibold py-2 px-6 rounded hover:bg-[#223634] transition"
        >
          Track Order
        </button>
      </div>
    </div>
  );
}
