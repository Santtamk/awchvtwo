import React from "react";
import { roomTariff, procedureCharges, icuProcedureCharges } from "@/data/tariffData";

const TariffSection = ({ title, data }) => {
  return (
    <div className="mb-8 overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm">
      <div className="bg-[#a50062] px-6 py-4">
        <h3 className="text-xl font-bold text-white uppercase tracking-wide">{title}</h3>
      </div>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 font-bold w-[50%]">Details</th>
              <th scope="col" className="px-6 py-3 font-bold text-right w-[20%]">Amount (Rs.)</th>
              <th scope="col" className="px-6 py-3 font-bold w-[30%]">Remarks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-100">{item.name}</td>
                <td className="px-6 py-4 text-right font-bold text-[#a50062] border-r border-gray-100">
                  {typeof item.price === 'number' ? `₹${item.price}` : item.price}
                </td>
                <td className="px-6 py-4 italic text-gray-500">{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {data.map((item, index) => (
          <div key={index} className={`p-4 ${index !== data.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-sm mb-1 break-words">{item.name}</p>
                {item.remarks && (
                  <p className="text-xs text-gray-500 italic break-words">{item.remarks}</p>
                )}
              </div>
              <div className="text-right shrink-0 max-w-[50%]">
                <p className="font-bold text-[#a50062] text-sm break-words">
                  {typeof item.price === 'number' ? `₹${item.price}` : item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TariffBoard = () => {
  return (
    <div className="max-w-5xl mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Hospital Tariff 2025-2026</h2>
        <p className="mt-2 text-gray-600">Detailed breakdown of accommodation, procedure, and ICU charges.</p>
      </div>

      <TariffSection title="1. Accommodation / Room Tariff" data={roomTariff} />
      <TariffSection title="2. Procedure Charges" data={procedureCharges} />
      <TariffSection title="ICU Procedure Rate Chart" data={icuProcedureCharges} />
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-8 text-sm text-yellow-800">
        <p className="font-bold">Note:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Total Number of Beds: 50</li>
            <li>Prices are subject to change without prior notice.</li>
        </ul>
      </div>
    </div>
  );
};

export default TariffBoard;
