"use client";
import React, { useState, useMemo } from "react";
import FilterBar from "@/components/RateChart/FilterBar";
import RateCard from "@/components/RateChart/RateCard";
import { treatments, categories } from "@/data/rateChartData";
import BackButton from "@/components/Buttons/BackBUtton";

const RateChartPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTreatments = useMemo(() => {
    if (activeCategory === "All") return treatments;
    return treatments.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black-50 pb-20">
      {/* Header Section */}
      <div className="bg-white pb-6 pt-24 md:pt-32 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
            <div className="mb-4">
                <BackButton />
            </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Treatment Rate Chart
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Transparent pricing for all our services. Browse through our treatments
            and their associated costs for different room types.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <FilterBar
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTreatments.map((treatment) => (
              <RateCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No treatments found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RateChartPage;
