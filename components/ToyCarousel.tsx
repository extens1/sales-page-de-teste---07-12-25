import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ToyCarousel: React.FC = () => {
  const images = [
    { src: "https://picsum.photos/id/10/800/800", label: "Cenário da Criação" },
    { src: "https://picsum.photos/id/20/800/800", label: "Arca de Noé 3D" },
    { src: "https://picsum.photos/id/30/800/800", label: "Menino Jesus na Manjedoura" },
    { src: "https://picsum.photos/id/40/800/800", label: "Davi e Golias" },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start with typical index

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-lg mx-auto relative group">
      <div className="overflow-hidden rounded-xl shadow-xl border-4 border-white bg-white">
        <div 
            className="flex transition-transform duration-500 ease-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center bg-blue-50">
               {/* Using a placeholder visual that looks somewhat like papercraft */}
               <div className="relative w-full aspect-square flex items-center justify-center p-8">
                  <img 
                    src={img.src} 
                    alt={img.label}
                    className="object-contain max-h-full drop-shadow-2xl transform hover:scale-105 transition-transform"
                  />
                  {/* Overlay to simulate paper texture/look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
               </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-6">
        <h3 className="text-xl font-bold text-gray-800">{images[currentIndex].label}</h3>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors focus:outline-none"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors focus:outline-none"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ToyCarousel;