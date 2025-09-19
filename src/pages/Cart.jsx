import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import gpayImg from "../assets/gpay.jpg";
import paypalImg from "../assets/paypal.png";
import clearpayImg from "../assets/clearpay.png";
import klarnaImg from "../assets/klarna.png";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartItems.length) return <p className="text-center mt-10">Your cart is empty.</p>;

  return (
    <div className="max-w-5xl mx-auto mt-8 rounded-lg p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      <h1 className="text-2xl font-bold text-start mb-4">Continue Shopping</h1>
      <div className="text-center rounded py-2 mb-6 border border-black">
        <span className="font-semibold">Free & Fast arriving by Monday</span>
        <span className="ml-2 text-gray-600">Order within 23 hours, 53 minutes, 50 seconds</span>
      </div>
      {/* Cart Items */}
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center pb-4 gap-4"
          >
            <img
              src={item.image_url ?? "/placeholder.png"}
              alt={item.name}
              className="w-28 h-28 object-cover rounded mr-5"
            />
            <div className="flex-1 flex justify-between items-center">
              {/* Item Details */}
              <div>
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-gray-700 mb-2">MRP₹ {item.price}</p>
              </div>
              {/* Selectors + Remove */}
              <div className="flex flex-col gap-3 items-end">
                <div className="flex gap-4">
                  <select className="border border-black p-1 rounded w-24">
                    <option value="41">Size (41)</option>
                    <option value="42">Size (42)</option>
                    <option value="43">Size (43)</option>
                  </select>
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="border border-black p-1 rounded w-24"
                  >
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        Quantity ({n + 1})
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-500 hover:text-red-700 text-sm flex items-center"
                >
                  Remove <span className="ml-1">🗑</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Summary */}
      <div className="mt-6 border-t border-b border-black pt-4">
        <div className="flex justify-between mb-2">
          <span className="font-bold text-xl">Summary</span>
          {/* Empty span to balance flex */}
          <span></span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-lg">Total : ₹{cartTotal}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg">Delivery : Free</span>
          <span className="flex items-center">
            <a
              href="#"
              className="text-teal ml-2 text-lg flex items-center"
            >
              Delivery & return information <span className="ml-1">🚚</span>
            </a>
          </span>
        </div>
      </div>
      {/* Checkout Button */}
      <button
        onClick={() => navigate("/checkout")}
        className="mt-7 w-2/3 bg-[#335451] text-white py-3 rounded-md hover:bg-[#223634] text-lg font-semibold flex items-center justify-center mx-auto block"
      >
        <span className="mr-2">🔒</span>Checkout Securely
      </button>
      {/* Express Checkout */}
      <div className="mt-6">
        <p className="font-semibold mb-3 text-lg text-center">Express Checkout</p>
        <div className="flex flex-col gap-3">
          {[gpayImg, paypalImg, clearpayImg, klarnaImg].map((img, idx) => (
            <div
              className="w-2/3 mx-auto border border-black rounded-md p-2 cursor-pointer hover:shadow flex justify-center items-center h-12 bg-gray-50"
              key={idx}
            >
              <img
                src={img}
                alt="Payment Option"
                className="object-contain h-8"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}