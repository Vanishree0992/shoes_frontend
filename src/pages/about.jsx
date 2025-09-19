import React from "react";
import ban from "../assets/ban4.jpg";
import circle from "../assets/about1.jpg";

export default function About() {
  return (
    <main className="flex-1 bg-white relative">
      {/* About + Mission Section with Half-Circle Image */}
      <div className="relative max-w-8xl mx-auto px-6 lg:py-12">
        <div className="lg:flex lg:items-center lg:gap-4 flex-col lg:flex-row">
          {/* Left Content */}
          <div className="text-center lg:text-left z-10 flex-1 px-4 md:px-10">
            <h1 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 md:mb-8">
              About StepUp
            </h1>
            <p className="text-gray-600 text-center leading-relaxed mb-6 md:mb-8 text-base sm:text-lg md:text-xl">
              StepUp is India's largest sports and athleisure footwear brand. Incorporated in 2006,
              StepUp Activewear is one of the leading players in organized sports & casual footwear
              sector in India. Since 2016, the flagship brand "StepUp" has been the largest sports
              and athleisure footwear brand in India, in both volume and value terms. The company's
              products are available via an expansive Pan-India network of over 15,000 geo-tagged
              multi-brand retail stores, 35+ company-owned exclusive outlets, large format stores
              such as Walmart, Vishal Retail, and Reliance Smart among others and all leading
              e-commerce portals.
            </p>

            <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-center leading-relaxed text-base sm:text-lg md:text-xl">
              At StepUp we craft shoes with care for everyone – men, women and kids – with equal
              attention to detail, letting each shoe speak for itself. The world-class quality,
              trendy designs and affordable prices have captured the imagination of millions of
              people across the country – making StepUp an aspirational brand for young adults,
              everyday performers, and fashionistas.
            </p>
          </div>

          {/* Right Half-Circle Image with Back Layer */}
          <div className="flex justify-center lg:justify-end relative mt-8 lg:mt-0 w-full lg:w-auto">
            {/* Back half-circle */}
            <div className="absolute top-4 lg:top-8 right-[40px] sm:right-[80px] lg:right-0 w-[280px] sm:w-[350px] lg:w-[400px] h-[450px] sm:h-[550px] lg:h-[650px] rounded-l-full bg-[#2F4F4F] z-0"></div>

            {/* Front image half-circle */}
            <div className="w-[280px] sm:w-[350px] lg:w-[400px] h-[450px] sm:h-[550px] lg:h-[650px] rounded-l-full overflow-hidden relative z-10 shadow-lg">
              <img
                src={ban}
                alt="StepUp Shoes Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Circular Product Image Section */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex justify-center relative">
          {/* Shadow background circle */}
          <div className="absolute w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 rounded-full bg-gray-300 right-[80px] sm:right-[120px] lg:right-[230px] top-1/2 -translate-y-1/2 shadow-2xl"></div>

          {/* Main product circle */}
          <div className="w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden relative z-10 shadow-lg">
            <img
              src={circle}
              alt="StepUp Product Showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Simplicity In Design</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                No flashy logos. No senseless details. Just the world's most comfortable shoes,
                naturally styled and designed practically. It's that simple.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Confidence in Comfort</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                Trying is believing. Give our shoes a shot for 30 days, and if you're not walking on
                cloud nine, we'll take them back – no questions asked.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Made from Nature</h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                The footwear industry often overlooks Mother Nature's materials in favor of cheaper,
                synthetic alternatives. We think it's time to change that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
