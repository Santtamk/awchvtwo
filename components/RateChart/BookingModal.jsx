"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

const BookingModal = ({ isOpen, onClose, treatmentName, roomType, price }) => {
  const [formData, setFormData] = useState({
    name: "",
    serviceFor: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the data to match the API structure
      const submissionData = {
        name: formData.name,
        email: "booking@awch.com", // Placeholder email for booking requests
        message: `Treatment Booking Request:
          Treatment: ${treatmentName}
          Room Type: ${roomType}
          Estimated Cost: ₹${price}/-
          Service For: ${formData.serviceFor}
          Phone: ${formData.phone}`,
      };

      const response = await fetch('/api/submissions', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Booking request submitted successfully!");
      
      // Reset form and close modal
      setFormData({ name: "", serviceFor: "", phone: "" });
      onClose();
    } catch (error) {
      toast.error(error.message || "Failed to submit booking request");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#a50062] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Book Appointment</h2>
            <p className="text-sm opacity-90 mt-1">{treatmentName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Booking Details */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Room Type:</span>
            <span className="font-semibold text-gray-900 capitalize">{roomType}</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-gray-600">Estimated Cost:</span>
            <span className="font-bold text-[#a50062] text-lg">₹{price}/-</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#a50062] focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            {/* Service For */}
            <div>
              <label htmlFor="serviceFor" className="block text-sm font-semibold text-gray-700 mb-2">
                Service For *
              </label>
              <input
                type="text"
                id="serviceFor"
                name="serviceFor"
                value={formData.serviceFor}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#a50062] focus:outline-none transition-colors"
                placeholder="e.g., Self, Mother, Child"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#a50062] focus:outline-none transition-colors"
                placeholder="10-digit mobile number"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-[#a50062] text-white font-semibold rounded-xl hover:bg-[#8a0052] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
