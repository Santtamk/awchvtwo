"use client";
import React, { useState, useMemo } from "react";
import FilterBar from "@/components/RateChart/FilterBar";
import CategorySidebar from "@/components/RateChart/CategorySidebar";
import RateCard from "@/components/RateChart/RateCard";
import { treatments, categories } from "@/data/rateChartData";
import BackButton from "@/components/Buttons/BackBUtton";

import TariffBoard from "@/components/RateChart/TariffBoard";

const RateChartPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("treatments"); // 'treatments' | 'tariff'

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredTreatments = useMemo(() => {
    if (activeCategory === "All") return treatments;
    return treatments.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTreatments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTreatments.length / itemsPerPage);

  // Reset to page 1 when category changes
  React.useEffect(() => {
    setCurrentPage(1);
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
          <div className="max-w-7xl mx-auto px-4 py-8 animate-fadeIn flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar for Desktop */}
            <div className="w-full lg:w-1/4 xl:w-1/5 shrink-0 hidden lg:block">
              <div className="sticky top-24">
                <CategorySidebar 
                  categories={categories}
                  activeCategory={activeCategory}
                  onSelectCategory={setActiveCategory}
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4 xl:w-4/5">
              {filteredTreatments.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
                    {currentItems.map((treatment) => (
                      <RateCard key={treatment.id} treatment={treatment} />
                    ))}
                  </div>

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-auto pt-8 border-t border-gray-100">
                      <button
                        onClick={() => {
                          setCurrentPage(prev => Math.max(prev - 1, 1));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
                      >
                        Previous
                      </button>
                      
                      {/* Desktop Pagination */}
                      <div className="hidden md:flex gap-1">
                        {(() => {
                          // Smart Pagination Logic
                          const pageNumbers = [];
                          const maxVisiblePages = 5;
                          
                          if (totalPages <= maxVisiblePages) {
                            for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
                          } else {
                            if (currentPage <= 3) {
                              pageNumbers.push(1, 2, 3, 4, '...', totalPages);
                            } else if (currentPage >= totalPages - 2) {
                              pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
                            } else {
                              pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
                            }
                          }

                          return pageNumbers.map((page, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                if (page !== '...') {
                                  setCurrentPage(page);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                              }}
                              disabled={page === '...'}
                              className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-all
                                ${page === currentPage 
                                  ? 'bg-[#a50062] text-white shadow-md transform scale-105' 
                                  : page === '...' 
                                    ? 'text-gray-400 cursor-default' 
                                    : 'text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                                }
                              `}
                            >
                              {page}
                            </button>
                          ));
                        })()}
                      </div>

                      {/* Mobile Page Indicator */}
                      <span className="text-sm text-gray-600 font-medium md:hidden px-4 bg-gray-50 py-2 rounded-lg">
                        Page {currentPage} of {totalPages}
                      </span>

                      <button
                        onClick={() => {
                          setCurrentPage(prev => Math.min(prev + 1, totalPages));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                  <p className="text-xl text-gray-500 font-medium">No treatments found for this category.</p>
                  <button 
                    onClick={() => setActiveCategory("All")}
                    className="mt-4 text-[#a50062] font-semibold hover:underline"
                  >
                    View all treatments
                  </button>
                </div>
              )}
            </div>
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
