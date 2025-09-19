import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import VisaLogo from "../assets/visa.png"; // import your logos
import GpayLogo from "../assets/gpay.jpg";
import PaypalLogo from "../assets/paypal.png";
import ClearpayLogo from "../assets/clearpay.png";
import KlarnaLogo from "../assets/klarna.png";

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod"); // default Cash On Delivery

  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    console.log("Placing order:", { shipping, cartItems, total: cartTotal, paymentMethod });
    localStorage.removeItem("cart");
    navigate("/order-placed", { state: { shipping, total: cartTotal, paymentMethod } });
  };

  if (!cartItems.length) return <p className="text-center mt-10">Your cart is empty.</p>;

  return (

    <div className="max-w-7xl mx-auto px-4">
      {/* Checkout Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center my-8">
        Checkout
      </h1>

      <div className="bg-gray-50 flex rounded-lg overflow-hidden shadow-lg min-h-[600px] mb-12">
        {/* Order Summary Section */}
        <aside className="bg-[#335451] text-white p-6 w-80 flex flex-col">
          <h2 className="font-semibold text-xl mb-6">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex mb-4 items-center">
              <img
                src={item.image_url ?? "/placeholder.png"}
                alt={item.name}
                className="w-20 h-20 object-cover rounded mr-4 border border-white"
              />
              <div className="flex-1">
                <p className="font-semibold text-m">{item.name}</p>
                <p className="text-s opacity-75">Harlan Mens Tan Boat Shoe</p>
                <p className="text-xs flex gap-2 mt-1">
                  <span>Size</span>
                  <span>{item.size || 41}</span>
                </p>
                <p className="text-xs flex gap-2 mt-1">
                  <span>Quantity</span>
                  <span>{item.quantity}</span>
                </p>
                <p className="text-xs flex gap-2 mt-1">
                  <span>MRP</span>
                  <span>₹ {item.price * item.quantity}</span>
                </p>
              </div>
            </div>
          ))}
          <hr className="border-gray-400" />
          <div className="flex justify-between mt-4 text-sm">
            <span>Amount</span>
            <span>₹ {cartTotal}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>Delivery fees</span>
            <span>Free</span>
          </div>
          <hr className="border-gray-400 mt-4" />
          <div className="flex justify-between font-semibold text-lg mt-4">
            <span>Total</span>
            <span>₹ {cartTotal}</span>
          </div>
        </aside>

        {/* Main Checkout Form */}
        <section className="flex-1 p-8 bg-gray-50">
          <h2 className="font-bold text-2xl mb-6">Complete Your Order</h2>

          {/* Personal Details */}
          <section className="mb-6">
            <h3 className="font-semibold text-2xl mb-3">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-semibold text-lg mb-1">First Name</label>
                <input
                  name="firstName"
                  value={shipping.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-semibold text-lg mb-1">Last Name</label>
                <input
                  name="lastName"
                  value={shipping.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-semibold text-lg mb-1">Email id</label>
                <input
                  type="email"
                  name="email"
                  value={shipping.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-semibold text-lg mb-1">Phone Number</label>
                <input
                  name="phone"
                  value={shipping.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone no"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </section>

          {/* Payment Details */}
          <section className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Payment Details</h3>
            <div className="flex items-center gap-4 mb-3">
              <img src={VisaLogo} alt="Visa" className="h-8 object-contain" />
              <img src={GpayLogo} alt="Google Pay" className="h-8 object-contain" />
              <img src={PaypalLogo} alt="Paypal" className="h-8 object-contain" />
              <img src={ClearpayLogo} alt="Clearpay" className="h-8 object-contain" />
              <img src={KlarnaLogo} alt="Klarna" className="h-8 object-contain" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                name="cardHolderName"
                placeholder="Card Holder Name"
                className="p-2 border rounded col-span-1"
              />
              <input
                name="cardNumber"
                placeholder="Card Number"
                className="p-2 border rounded col-span-1"
              />
              <input
                name="cvv"
                placeholder="Example: 439"
                className="p-2 border rounded col-span-1"
              />
              <input
                name="expiry"
                placeholder="MM/YY"
                className="p-2 border rounded col-span-1"
              />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              <label htmlFor="cod" className="font-semibold text-lg cursor-pointer">
                Cash on Delivery
              </label>
            </div>
          </section>

          {/* Shipping Address */}
          <section className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Shipping Address</h3>
            <input
              name="address"
              value={shipping.address}
              onChange={handleChange}
              placeholder="Address Line 1"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                name="city"
                value={shipping.city}
                placeholder="Your city"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="state"
                value={shipping.state}
                placeholder="Your state"
                onChange={handleChange}
                className="p-2 border rounded"
              />
              <input
                name="landmark"
                placeholder="Any landmark (famous place/mall)"
                onChange={handleChange}
                className="p-2 border rounded col-span-1 md:col-span-2"
              />
              <input
                name="pincode"
                value={shipping.pincode}
                placeholder="Code"
                onChange={handleChange}
                className="p-2 border rounded"
              />
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-300 text-black text-xl font-semibold rounded py-2 px-12 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handlePlaceOrder}
              className="bg-[#335451] text-xl text-white font-semibold rounded py-2 px-12 hover:bg-[#223634]"
            >
              Order Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}