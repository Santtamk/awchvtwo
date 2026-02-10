"use client";
import React, { useState, useMemo } from "react";
import FilterBar from "@/components/RateChart/FilterBar";
import RateCard from "@/components/RateChart/RateCard";
import { treatments, categories } from "@/data/rateChartData";
import BackButton from "@/components/Buttons/BackBUtton";

import TariffBoard from "@/components/RateChart/TariffBoard";

const RateChartPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("treatments"); // 'treatments' | 'tariff'

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
            Treatment Rate Chart & Tariff
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Transparent pricing for all our services. Browse through our treatments,
            room tariffs, and procedure charges.
          </p>
          
          {/* Tab Switcher */}
          <div className="mt-8 inline-flex bg-gray-100 p-1 rounded-2xl">
            <button
              onClick={() => setActiveTab("treatments")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "treatments"
                  ? "bg-[#a50062] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Treatment Rates
            </button>
            <button
              onClick={() => setActiveTab("tariff")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === "tariff"
                  ? "bg-[#a50062] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Hospital Tariff
            </button>
          </div>
        </div>
      </div>

      {activeTab === "treatments" ? (
        <>
          {/* Filter Section */}
          <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm animate-fadeIn">
            <div className="max-w-7xl mx-auto">
              <FilterBar
                categories={categories}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
              />
            </div>
          </div>

          {/* Content Grid */}
          <div className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn">
            {filteredTreatments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
        </>
      ) : (
        /* Tariff Board Section */
        <div className="max-w-7xl mx-auto px-4 py-8">
           <TariffBoard />
        </div>
      )}
    </div>
  );
};

export default RateChartPage;
