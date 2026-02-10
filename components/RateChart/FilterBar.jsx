"use client";
import React from "react";

const FilterBar = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="w-full overflow-x-auto py-4 no-scrollbar">
      <div className="flex items-center gap-3 px-4 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300
              ${
                activeCategory === category
                  ? "bg-primary-100 text-primary-800 border-2 border-primary-800 shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
