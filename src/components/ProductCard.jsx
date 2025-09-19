import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Safely extract product fields with fallbacks
  const name = product?.name ?? "Unnamed Product";
  const description = product?.description ?? "No description";
  const price = product?.price ?? "0.00";
  const imageUrl = product?.image_url ?? "/placeholder.png";
  const rating = Number(product?.rating) || 0;
  const colorsToShow = product?.colors?.slice(0, 3) ?? [];

  return (
    <div
      className="max-w-xs border rounded-xl shadow  transition flex flex-col hover:border-black hover:shadow-xl h-[500px]"
    >
      {/* Product Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-50 object-cover transition hover:scale-105 "
        />
      </div>

      {/* Product Name */}
      <h3 className="font-bold px-4 text-base mt-4">{name}</h3>

      {/* Product Description */}
      <p className="text-gray-600 mt-2 px-4 text-sm line-clamp-2">{description}</p>

      {/* Price */}
      <p className="text-gray-800 px-4 font-semibold mt-3 text-sm">
        MRP ₹. {price}
      </p>

      {/* Rating */}
      <div className="flex px-4 items-center mt-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.957z" />
          </svg>
        ))}
        <span className="ml-2 px-4 text-gray-600 font-medium text-sm">
          {rating.toFixed(1)}
        </span>
      </div>

      {/* Colors */}
      {colorsToShow.length > 0 && (
        <div className="flex px-4 items-center gap-1 mt-3">
          <span className="font-medium text-gray-700 mr-1 text-sm">Color:</span>
          {colorsToShow.map((color) => (
            <span
              key={color?.id ?? Math.random()}
              className="w-3 h-3 rounded-sm border"
              style={{ backgroundColor: color?.hex ?? "#000" }}
              title={color?.name ?? "Unknown"}
            ></span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex p-4 gap-10 mt-4">
        {/* Buy Now Button */}
        <button
          onClick={() => {
            navigate(`/product/${product.id}`, { state: { product } }); // 👈 navigate to detail page
          }}
          className="flex-1 bg-white text-black border border-black py-1 text-[15px] rounded-lg hover:bg-gray-100 transition font-semibold"
        >
          Buy
        </button>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-[#2f4f4f] text-white py-1 text-[15px] rounded-lg hover:bg-gray-800 transition font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
