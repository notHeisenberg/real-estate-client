import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const CarGallery = ({ cars, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCarIndex, setSelectedCarIndex] = useState(0);

  const handleCarClick = (index) => {
    setSelectedCarIndex(index);
    setIsOpen(true);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {cars.map((car, index) => (
          <div
            key={car.id}
            className="relative group cursor-pointer aspect-[4/3]"
            onClick={() => handleCarClick(index)}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={car.thumbnail}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
              <h3 className="text-lg font-libre-baskerville font-light mb-2 text-white translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                {car.name}
              </h3>
              <p className="text-white/90 text-sm transform-gpu translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200 line-clamp-2">
                {car.category.charAt(0).toUpperCase() + car.category.slice(1)} Vehicle
              </p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={selectedCarIndex}
        slides={cars[selectedCarIndex]?.images.map(img => ({ 
          src: img,
          width: 1920,
          height: 1080
        }))}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, .95)" },
          slide: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          image: {
            maxWidth: "90vw",
            maxHeight: "90vh",
            objectFit: "contain"
          }
        }}
      />
    </div>
  );
};

export default CarGallery; 