"use client";
import React, { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import BookingModal from "./BookingModal";

const RateCard = ({ treatment }) => {
  const [selectedRoom, setSelectedRoom] = useState('private'); // Default to private
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getRoomPrice = () => {
    return treatment.prices[selectedRoom];
  };

  const handleBookNow = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="w-full max-w-[650px] mx-auto bg-[#e5e5e5] rounded-[32px] overflow-visible shadow-sm flex flex-col font-sans relative min-h-[250px]">
      
      {/* Main Section: Pink Background */}
      <div className="m-2 bg-[#a50062] rounded-[24px] pt-6 px-6 pb-6 text-white flex flex-col md:flex-row gap-6 relative h-[250px]">
          
          {/* Left: Title & Description */}
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
              <div className="flex-1">
                <h2 className={`font-bold mb-3 uppercase tracking-tight leading-tight ${
                  treatment.name.length > 20 ? 'text-xl md:text-2xl' : treatment.name.length > 12 ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'
                }`}>
                    {treatment.name}
                </h2>
                <p className="text-sm leading-relaxed opacity-90 line-clamp-3">
                    {treatment.description}
                </p>
              </div>
              <p className="text-[9px] mt-3 opacity-80">* T&C applied</p>
          </div>

          {/* Right: Pricing Radio Buttons */}
          <div className="flex flex-col gap-3 min-w-[160px] shrink-0">
              {/* General */}
              <label className="flex items-start gap-2.5 cursor-pointer" onClick={() => setSelectedRoom('general')}>
                  <div className="mt-0.5">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                      selectedRoom === 'general' ? 'bg-white' : 'border-2 border-white'
                    }`}>
                      {selectedRoom === 'general' && <IoCheckmark size={18} strokeWidth={5} className="text-[#a50062]" />}
                    </div>
                  </div>
                  <div>
                      <p className="text-[8px] uppercase tracking-wide opacity-90 leading-tight">General RoomCharge</p>
                      <p className="text-lg font-bold leading-none mt-0.5">₹{treatment.prices.general}/-</p>
                  </div>
              </label>

               {/* Private */}
               <label className="flex items-start gap-2.5 cursor-pointer" onClick={() => setSelectedRoom('private')}>
                  <div className="mt-0.5">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                      selectedRoom === 'private' ? 'bg-white' : 'border-2 border-white'
                    }`}>
                      {selectedRoom === 'private' && <IoCheckmark size={18} strokeWidth={5} className="text-[#a50062]" />}
                    </div>
                  </div>
                  <div>
                      <p className="text-[8px] uppercase tracking-wide opacity-90 leading-tight">(Per Day) P.V.T Room Charge</p>
                      <p className="text-lg font-bold leading-none mt-0.5">₹{treatment.prices.private}/-</p>
                  </div>
              </label>

               {/* Deluxe */}
              <label className="flex items-start gap-2.5 cursor-pointer" onClick={() => setSelectedRoom('deluxe')}>
                  <div className="mt-0.5">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                      selectedRoom === 'deluxe' ? 'bg-white' : 'border-2 border-white'
                    }`}>
                      {selectedRoom === 'deluxe' && <IoCheckmark size={18} strokeWidth={5} className="text-[#a50062]" />}
                    </div>
                  </div>
                  <div>
                      <p className="text-[8px] uppercase tracking-wide opacity-90 leading-tight">(Per Day) Deluxe Room Charge</p>
                      <p className="text-lg font-bold leading-none mt-0.5">₹{treatment.prices.deluxe}/-</p>
                  </div>
              </label>
          </div>
      </div>

      {/* Bottom Section: Footer */}
      <div className="px-6 pt-4 pb-4 flex items-center justify-between">
           {/* Insurer Approved */}
           <div>
               <div className="flex -space-x-1.5 mb-1.5 opacity-60">
                   {[1,2,3,4,5,6,7,8].map((_, i) => (
                       <div key={i} className="w-5 h-5 rounded-full bg-[#d4a89a] border border-[#e5e5e5]" />
                   ))}
               </div>
               <p className="text-[10px] font-bold text-[#a50062] pl-0.5">34+ Insurer Approved</p>
           </div>

           {/* Book Now Button */}
           <button 
             onClick={handleBookNow}
             className="flex items-center gap-2 text-[#a50062] font-bold text-xl md:text-2xl hover:gap-3 transition-all cursor-pointer"
           >
               Book Now <span className="text-lg">→</span>
           </button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        treatmentName={treatment.name}
        roomType={selectedRoom}
        price={getRoomPrice()}
      />

    </div>
  );
};

export default RateCard;
