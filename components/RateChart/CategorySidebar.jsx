"use client";
import React from "react";

const CategorySidebar = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="hidden lg:block w-full sticky top-24 self-start animate-fadeIn">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
          <h3 className="text-gray-900 font-bold text-lg">Categories</h3>
        </div>
        <div className="p-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all mb-1 cursor-pointer
                ${
                  activeCategory === category
                    ? "bg-[#a50062]/10 text-[#a50062] font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span>{category}</span>
                {activeCategory === category && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#a50062]"></div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Helper Text */}
      <div className="mt-6 px-4">
        <p className="text-xs text-gray-500 text-center leading-relaxed">
          Select a category to view specific treatments and their rates.
        </p>
      </div>
    </div>
  );
};

export default CategorySidebar;
