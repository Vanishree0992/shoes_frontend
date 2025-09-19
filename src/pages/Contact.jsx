import React, { useState } from "react";
import axiosInstance from "../api/axios";
import contactImage from "../assets/contact.png";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/contact/", form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message.");
    }
  };

  return (
  <div className="space-y-12 pb-20">
    {/* Top Content */}
   <div className="max-w-full mx-12 mt-10 p-2 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 items-center">
      {/* Left Column - Text */}
      <div className="space-y-2 ps-12 ms-2 leading-loose">
        <h1 className="text-3xl font-bold pb-12">Contact Us</h1>

        <div>
          <h2 className="text-2xl font-semibold pb-2">For Online Orders</h2>
          <p className="text-xl">Inquiry/Complaint</p>
          <p>9976357250</p>
        </div>

        <div>
          <p className=" mt-4 text-xl ">Any other queries</p>
          <p>9976357250</p>
          <p>9976357250</p>
          <p>10 AM - 7 PM</p>
          <p className="text-xl">
            Email:{" "}
            <a
              href="mailto:customercarestepup.in@gmail.com"
              className="underline text-gray text-xl"
            >
              customercarestepup.in@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Right Column - Image */}
      <div>
        <img
          src={contactImage}
          alt="Contact"
          className="w-full h-auto rounded"
        />
      </div>
    </div>
   {/* Divider Line */}
<hr className="w-11/12 mx-auto border-t-1 border-black my-8" />
    {/* Contact Form */}
    <div className="w-4/5 md:w-1/2 mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-6">Enquiry Form</h2>
      {status && <p className="mb-4 text-green-600">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-2xl font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-2xl font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-2xl font-semibold mb-2">Phone</label>
            <input
              type="text"
              name="subject" // keeping your original state field name
              value={form.subject}
              onChange={handleChange}
              className="w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-2xl font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#2f4f4f] text-white text-2xl font-semibold px-6 py-2 rounded-lg hover:bg-teal-800"
        >
          Send
        </button>
      </form>
    </div>
  </div>
);
}
