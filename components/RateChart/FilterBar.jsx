"use client";
import React from "react";

const FilterBar = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="w-full py-8">
      <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100 shadow-sm max-w-5xl mx-auto backdrop-blur-sm">
        <h3 className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-4">Filter by Category</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border
                ${
                  activeCategory === category
                    ? "bg-[#a50062] text-white border-[#a50062] shadow-md transform scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
