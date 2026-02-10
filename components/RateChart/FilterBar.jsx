"use client";
import React, { useState } from "react";

const FilterBar = ({ categories, activeCategory, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full py-8 relative z-10 lg:hidden">
      <div className="max-w-xs mx-auto relative">
        <label className="block text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">
          Filter by Category
        </label>
        
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl shadow-sm hover:border-[#a50062] focus:outline-none focus:ring-2 focus:ring-[#a50062]/20 transition-all flex justify-between items-center"
          >
            <span className="truncate">{activeCategory}</span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto animate-fadeIn">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onSelectCategory(category);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors border-b border-gray-50 last:border-0
                    ${
                      activeCategory === category
                        ? "bg-[#a50062]/5 text-[#a50062]"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span>{category}</span>
                    {activeCategory === category && (
                      <span className="text-[#a50062]">✓</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Backdrop to close dropdown when clicking outside */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default FilterBar;
