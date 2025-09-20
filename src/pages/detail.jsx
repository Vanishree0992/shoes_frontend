import React, { useState, useEffect } from 'react';
import { Star, Minus, Plus, MessageCircle } from 'lucide-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/api/products/${id}/`)
    .then((res) => {
      setProduct(res.data);
      setSelectedColor(res.data.colors[0]?.name ?? '');
      setSelectedSize(res.data.sizes[0]?.value ?? '');
    })
    .catch((err) => console.log("Fetch error:", err));
}, [id]);

  const handleQuantityChange = (action) => {
    if (action === 'increment') setQuantity((prev) => prev + 1);
    else if (action === 'decrement' && quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (!product) return <p>Loading...</p>;

  // Keep the same image for all thumbnails
  const productImages = Array(6).fill(product.image_url || '/placeholder.png');

  // Hardcoded colors for display like your original code
  const colors = product.colors.length
    ? product.colors.map((c) => ({ name: c.name, bgColor: c.hex }))
    : [
        { name: 'black', bgColor: '#000000' },
        { name: 'tan', bgColor: '#D2B48C' },
        { name: 'red', bgColor: '#FF0000' },
      ];

  const sizes = product.sizes.length ? product.sizes.map((s) => s.value) : ['41', '42', '43', '44', '45'];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - Product Images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                    selectedImage === index ? 'ring-2 ring-gray-400' : 'hover:ring-1 hover:ring-gray-300'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="space-y-6">
            
            {/* Product Title and Brand */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {product.brand?.name ?? 'Brand'}
              </h2>
              <h1 className="text-lg md:text-xl text-gray-700 mb-3">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                MRP₹ {product.price}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.rating.toFixed(1)}/5(16 reviews)</span>
            </div>

            {/* Color Selection */}
             {product.colors.length > 0 && (
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Color : {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
                </h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === color.name ? 'border-gray-800' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
             )}

            {/* Size Selection */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Shoe Size
              </h3>
              <div className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 text-sm font-medium rounded-md border transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Quantity
              </h3>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange('decrement')}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-l-md hover:bg-gray-200 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-16 h-10 text-center border-t border-b border-gray-300 bg-white text-gray-900 font-medium"
                />
                <button
                  onClick={() => handleQuantityChange('increment')}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-800 transition-colors duration-200">
                Add to Cart
              </button>
              <button className="w-full bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-800 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Buy Now</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </button>
            </div>

            {/* Payment Options */}
            <div className="border border-gray-300 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 text-center">
                Secure Checkout With
              </h3>
              <div className="flex justify-center items-center space-x-4">
                <img src="/src/assets/gpay.jpg" alt="UPI" className="h-6" />
                <img src="/src/assets/visa.png" alt="Mastercard" className="h-6" />
                <img src="/src/assets/paypal-logo.png" alt="RuPay" className="h-6" />
                <img src="/src/assets/rupay.png" alt="Visa" className="h-6" />
              </div>
            </div>

            {/* Size Guide */}
            <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <MessageCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-700">Unsure about your size? Let's connect</span>
            </button>

            {/* Delivery Info */}
            <div className="bg-gray-100 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">COD Available</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">24 Hour Dispatch</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">7 Days easy return & exchange</span>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Product Details
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                The Harlan men's boat shoes from Comfy Steps are perfect for your casual summer outings. Featuring a tan upper with navy blue accents and intricate white stitching, these shoes offer a trendy look. The twin buckle detail and the lace up fastening ensures a quick and secure fit, while the gripped outsole provides stability and security.
              </p>
            </div>

          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 space-y-6">
          {/* Review 1 */}
          <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Reviews:</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side - Reviewer Info and Ratings */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">B</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Reviewed by Beverley</p>
                    <p className="text-sm text-gray-600">From: Weymouth</p>
                  </div>
                </div>

                {/* Rating Categories */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Fit</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Comfort</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Value for Money</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Quality</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Review Content */}
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Super Looking</h4>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-gray-600">Overall rating</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Very pleased with the super fast delivery and packaging. Shoes are very good quality and superb See more...
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">Beverley would recommend this product</span>
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Reviews:</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side - Reviewer Info and Ratings */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">B</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Reviewed by Beverley</p>
                    <p className="text-sm text-gray-600">From: Weymouth</p>
                  </div>
                </div>

                {/* Rating Categories */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Fit</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Comfort</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Value for Money</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Quality</span>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Review Content */}
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Super Looking</h4>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm text-gray-600">Overall rating</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Very pleased with the super fast delivery and packaging. Shoes are very good quality and superb See more...
                </p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">Beverley would recommend this product</span>
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;