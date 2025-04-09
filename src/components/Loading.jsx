import React from 'react';

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#0a192f] flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-24 h-24 border-4 border-[#64ffda]/20 rounded-full animate-spin"></div>
        
        {/* Inner ring */}
        <div className="absolute top-0 left-0 w-24 h-24 border-4 border-t-[#64ffda] border-r-[#64ffda] border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        
        {/* Logo or text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-[#64ffda] font-bold text-xl">SK</span>
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            <span className="text-[#64ffda] animate-bounce" style={{ animationDelay: '0ms' }}>L</span>
            <span className="text-[#64ffda] animate-bounce" style={{ animationDelay: '150ms' }}>O</span>
            <span className="text-[#64ffda] animate-bounce" style={{ animationDelay: '300ms' }}>A</span>
            <span className="text-[#64ffda] animate-bounce" style={{ animationDelay: '450ms' }}>D</span>
            <span className="text-[#64ffda] animate-bounce" style={{ animationDelay: '600ms' }}>I</span>
            <span className="text-[#64ffda] animate-bounce" style={{ animationDelay: '750ms' }}>N</span>
            <span className="text-[#64ffda] animate-bounce" style={{ animationDelay: '900ms' }}>G</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 