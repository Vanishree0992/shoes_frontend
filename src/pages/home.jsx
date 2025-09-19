import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Carousel Images
import ban1 from "../assets/ban1.jpg";
import ban2 from "../assets/ban2.jpg";
import ban3 from "../assets/ban3.jpg";
import ban4 from "../assets/ban4.jpg";

// Category Images
import mensImage from "../assets/mens.png";
import womensImage from "../assets/women.png";
import kidsImage from "../assets/kids.png";

// Trending Products
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(false);

  // Carousel auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Promo banner toggle
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      image: ban1,
      text: "Womens high heel for party\nfor your first order get a free gift",
      textPosition: "left-10 top-20",
      buttonPosition: "left-10 bottom-40 animate-slide-in-left",
    },
    {
      image: ban2,
      text: "Mens Wear high heel office shoes only 40% discount todat only",
      textPosition: "right-10 top-20",
      buttonPosition: "right-10 bottom-40 animate-slide-in-right",
    },
    {
      image: ban3,
      text: "Womens red color high heel Flat 30% offer \nfor your first order ",
      textPosition: "left-10 top-20",
      buttonPosition: "left-10 bottom-40 animate-slide-in-left",
    },
    {
      image: ban4,
      text: "Flat 50% sale \n Kids shoes",
      textPosition: "right-10 top-20",
      buttonPosition: "right-10 bottom-40 animate-slide-in-right",
    },
  ];

  const categories = [
    { name: "mens", label: "Mens", image: mensImage },
    { name: "womens", label: "Womens", image: womensImage },
    { name: "kids", label: "Kids", image: kidsImage },
  ];

  const trendingProducts = [
    { id: 1, name: "Ophelia Womens Silver Diamante Heel", price: "2,299", image: img1 },
    { id: 2, name: "Billie Womens Silver Diamante Heel", price: "3,000", image: img2 },
    { id: 3, name: "Drew Womens Blush Diamante Slip On Shoe", price: "2,399", image: img3 },
    { id: 4, name: "Drew Womens Navy Diamante Slip On Shoe", price: "1,299", image: img4 },
    { id: 5, name: "Weaver Mens Navy Lace Up Trainer", price: "2,799", image: img5 },
    { id: 6, name: "Weaver Mens White Lace Up Trainer", price: "2,259", image: img6 },
    { id: 7, name: "Calista Girls Pink Daisy Print Sandal", price: "2,899", image: img7 },
    { id: 8, name: "Colby Boys Blue Dinosaur Canvas", price: "3,299", image: img8 },
  ];

  return (
    <main className="flex-1">

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto my-10 rounded-xl overflow-hidden shadow-lg h-[350px] md:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div
              className={`absolute bg-black/60 text-white p-5 md:p-8 rounded-md max-w-xs md:max-w-md ${slide.textPosition}`}
            >
              {slide.text.split("\n").map((line, i) => (
                <p key={i} className="text-sm md:text-lg">{line}</p>
              ))}
            </div>

            {/* Animated Button */}
            <button
              className={`absolute bg-white text-black font-bold px-6 py-3 rounded-md shadow-lg hover:bg-gray-200 transition ${slide.buttonPosition}`}
            >
              Shop Now
            </button>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-5 w-full flex justify-center gap-3">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full border-2 border-white cursor-pointer ${current === i ? "bg-white" : "bg-transparent"
                }`}
            ></span>
          ))}
        </div>
      </div>
      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center">
          Overview
        </h2>
        <p className="text-black text-base sm:text-lg md:text-xl text-center max-w-5xl mx-auto leading-relaxed">
          "Explore our curated selection of high-quality shoes for every occasion. From durable
          athletic shoes designed for peak performance to stylish casual sneakers
          and elegant dress shoes, We offer a diverse reange of footwear to suit yourneeds. Our user-friendly interface makes it easy to browse our collection and find the perfect pair, While detailed product description and hign-quality images
          ensure you make an informed decision. Join our community of styledand discover you next favorite shoe!"
        </p>
      </div>

      {/* Categories Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center">
          What are you looking for?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center">
              <Link
                to={`/category/${cat.name}`}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 w-full h-[450px]"
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover"
                />
              </Link>
              <span className="mt-4 text-lg font-semibold text-gray-800 text-center">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* New & Trending Section */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-black mb-8 text-center">
            New & Trending
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-10">
          {trendingProducts.map((product) => (
            <div key={product.id} className="p-3 md:p-6 group cursor-pointer flex flex-col">
              {/* Product Image */}
              <div className="mb-3 md:mb-4 overflow-hidden rounded-lg flex items-center justify-center p-1 md:p-2 bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="text-center flex-1 flex flex-col justify-between leading-none">
                <h3 className="font-semibold text-gray-900 text-xs md:text-sm lg:text-base mb-1 md:mb-2 leading-none line-clamp-2">
                  {product.name}
                </h3>
                <p className="font-bold text-gray-900 text-xs md:text-sm lg:text-base">
                  MRP : ₹ {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-end mb-8 md:mb-12">
          <button className="bg-[#2F4F4F] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium text-sm md:text-base shadow-md">
            View all
          </button>
        </div>

        {/* Promotional Banner */}
        <div
          className={`border-2 border-gray-300 rounded-lg p-4 md:p-6 lg:p-2 shadow-sm transition-colors duration-500
          ${active ? "bg-white text-black" : "bg-[#2F4F4F] text-white"}`}
        >
          <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4 text-center">
            <span className="text-2xl md:text-3xl lg:text-4xl">🎁</span>
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Get your first order with free gift
            </h2>
            <span className="text-2xl md:text-3xl lg:text-4xl">🎁</span>
            <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              & 50 % offer
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl">👑</span>
          </div>
        </div>
      </div>
    </main>
  );
}
