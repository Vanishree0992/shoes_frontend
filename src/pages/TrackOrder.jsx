import React from "react";

export default function TrackOrder() {
  // For demo, using static status timeline
  const statusTimeline = [
    { status: "Placed", date: "2025-09-16 10:00" },
    { status: "Dispatched", date: "2025-09-17 09:30" },
    { status: "In Transit", date: "2025-09-18 14:00" },
  ];

  const fullTimeline = [
    { 
      status: "Order Placed", 
      date: "May 21,2025 | 03:45 pm",
      completed: true
    },
    { 
      status: "OrderDispatched", 
      date: "May 22,2025 | 11:45 am",
      completed: true
    },
    { 
      status: "Order in transit", 
      date: "Reached at Tenkasi.Post office",
      completed: true
    },
    { 
      status: "Delivered successfully", 
      date: "Not delivered yet",
      completed: false
    }
  ];

  return (
    <div className="max-w-md my-10 mx-auto bg-white border border-black rounded-lg leading-loose">
      {/* Header */}
      <div className="bg-gray-100 p-4 rounded-t-lg border-b">
        <div className="flex items-center mb-4">
          <span className="text-xl mr-2">←</span>
          <h2 className="text-lg font-semibold">Your Order</h2>
        </div>
        
        {/* Order Info */}
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <span>Order no #Bh2300006</span>
          <span>Cash on Delivery ₹ 2,799</span>
        </div>
        
        {/* Product Info */}
        <div className="flex items-start space-x-3">
          <img 
            src="/placeholder.png"
            alt="Comfy Steps"
            className="w-16 h-16 object-cover rounded-lg border border-gray-200"
          />
          <div>
            <h3 className="font-semibold text-gray-900">Comfy Steps</h3>
            <p className="text-sm text-gray-600">Harlan Mens Fan Boat Shoe</p>
            <p className="text-sm text-gray-500 mt-1">Exp : Delivery by sun, May 31</p>
          </div>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="p-4 bg-gray-50 rounded-b-lg">
        <div className="relative">
          {fullTimeline.map((item, index) => {
            const isLast = index === fullTimeline.length - 1;
            
            return (
              <div key={index} className="relative flex items-start">
                {/* Timeline line */}
                {!isLast && (
                  <div className={`absolute left-6 top-12 w-0.5 h-16 ${
                    item.completed ? 'bg-gray-300' : 'bg-gray-200 border-dotted border-l-2 border-gray-300'
                  }`}></div>
                )}
                
                {/* Icon circle */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  item.completed 
                    ? 'bg-teal-600 text-white' 
                    : 'bg-gray-400 text-white'
                }`}>
                  {index === 0 && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 8H17L15.5 7L14 8H5V19H19V8H20M20 6C21.11 6 22 6.89 22 8V19C22 20.11 21.11 21 20 21H4C2.89 21 2 20.11 2 19V8C2 6.89 2.89 6 4 6H12L14 4H20Z"/>
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 12L20.56 9.22L20.9 5.54L17.29 4.72L15.4 1.54L12 3L8.6 1.54L6.71 4.72L3.1 5.53L3.44 9.21L1 12L3.44 14.78L3.1 18.47L6.71 19.29L8.6 22.47L12 21L15.4 22.46L17.29 19.28L20.9 18.46L20.56 14.78L23 12M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                    </svg>
                  )}
                </div>
                
                {/* Content */}
                <div className="ml-4 pb-8">
                  <h3 className={`font-semibold ${item.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                    {item.status}
                  </h3>
                  <p className={`text-sm ${item.completed ? 'text-gray-700' : 'text-gray-500'}`}>
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}