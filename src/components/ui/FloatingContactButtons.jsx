import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';

const FloatingContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handlePhoneClick = () => {
    window.open('tel:0123456789', '_self');
  };

  const handleZaloClick = () => {
    window.open('https://zalo.me/0123456789', '_blank');
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Phone button */}
      <div
        className={`transition-all duration-300 ease-in-out opacity-100 translate-y-0 `}

      >
        <button
          onClick={handlePhoneClick}
          className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center mb-3 group"
          title="Gọi điện thoại"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Gọi: 0123 456 789
          </span>
        </button>
      </div>

      {/* Zalo button */}
      <div
        className={`transition-all duration-300 ease-in-out opacity-100 translate-y-0 `}>
        <button
          onClick={handleZaloClick}
          className="w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center mb-3 group"
          title="Chat Zalo"
        >
          {/* Zalo Icon - Text "Z" */}
          <span className="text-white font-bold text-lg">Z</span>
          <span className="absolute right-full mr-3 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat Zalo
          </span>
        </button>
      </div>

     
    </div>
  );
};

export default FloatingContactButtons;
