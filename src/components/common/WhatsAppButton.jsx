import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+34653574559'; // Your WhatsApp number
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-8 z-50 flex items-center bg-green-500 text-white px-4 py-3 rounded-full 
                shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group hover:pr-8
                hover:bg-green-400"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-300 ease-in-out">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton; 