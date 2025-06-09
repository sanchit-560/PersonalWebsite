import React, { useState } from 'react';
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 4; // Total number of cards including placeholders

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const PlaceholderCard = () => (
    <div className="mt-6 w-[90%] sm:w-96 bg-[#112240] border border-[#64ffda]/10 hover:border-[#64ffda]/30 transition-all duration-300 hover:transform hover:scale-105 p-4 sm:p-6 rounded-lg">
      <div className="h-full flex flex-col items-center justify-center text-center">
        <div className="text-[#64ffda] text-3xl sm:text-4xl mb-3 sm:mb-4">🚀</div>
        <h3 className="text-[#64ffda] font-bold text-lg sm:text-xl mb-2">More Projects Coming Soon</h3>
        <p className="text-[#8892b0] text-base sm:text-lg">
          I'm working on exciting new projects. Stay tuned for updates!
        </p>
      </div>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden px-4 sm:px-0">
      <div className="flex justify-center items-center">
        {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-4 z-10 p-2 rounded-full bg-[#112240] border border-[#64ffda]/20 hover:border-[#64ffda] transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-[#64ffda]" />
        </button>

        <div className="flex transition-transform duration-500 ease-in-out w-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <div className="w-full flex-shrink-0 flex justify-center">
            <div className="w-[90%] sm:w-96">
              <Card1 />
            </div>
          </div>
          <div className="w-full flex-shrink-0 flex justify-center">
            <div className="w-[90%] sm:w-96">
              <Card2 />
            </div>
          </div>
          <div className="w-full flex-shrink-0 flex justify-center">
            <PlaceholderCard />
          </div>
          <div className="w-full flex-shrink-0 flex justify-center">
            <PlaceholderCard />
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-4 z-10 p-2 rounded-full bg-[#112240] border border-[#64ffda]/20 hover:border-[#64ffda] transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 text-[#64ffda]" />
        </button>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="sm:hidden flex justify-between mt-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-[#112240] border border-[#64ffda]/20 hover:border-[#64ffda] transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 text-[#64ffda]" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-[#112240] border border-[#64ffda]/20 hover:border-[#64ffda] transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 text-[#64ffda]" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: totalCards }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-[#64ffda] w-4' : 'bg-[#64ffda]/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}; 