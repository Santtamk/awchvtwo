"use client";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

const MainForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    specialty: "",
    date: "",
    time: "",
    countryCode: "+91",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare the data to match the API structure
      const submissionData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        message: `Appointment Request:
          Specialty: ${formData.specialty}
          Date: ${formData.date}
          Time: ${formData.time}
          Phone: ${formData.countryCode}${formData.phone}`,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/submissions`,
        {
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

      setSubmitStatus({
        success: true,
        message: "Appointment booked successfully!",
      });
      toast.success("Appointment booked successfully!");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        specialty: "",
        date: "",
        time: "",
        countryCode: "+91",
        phone: "",
        email: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || "Failed to book appointment",
      });
      toast.error("Failed to book appointment");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="self-stretch inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden lg:px-24 lg:py-10 
     "
    >
      {/* bg image */}

      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.2]"
        style={{ backgroundImage: "url('form_image.svg')" }}
      ></div> */}

      <div className=" flex flex-col justify-start items-center gap-5">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-950 text-4xl lg:text-5xl font-bold  tracking-wide">
              Schedule Your Visit at AWCH
            </div>
          </div>
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-700 text-base lg:text-xl font-normal">
              Whether it's a routine check-up or a specialist consultation, our
              team is here to support your health journey with compassion and
              expertise.
            </div>
          </div>
        </div>

        <div
          className=" bg-primary-100 rounded-[32px] inline-flex justify-center items-center gap-2.5 overflow-hidden flex-col-reverse lg:flex-row p-[0.625rem] bg-cover lg:bg-contain  bg-left bg-no-repeat"
          style={{ backgroundImage: "url('form_image.svg')" }}
        >
          <div className="flex-1 self-stretch p-2.5  inline-flex flex-col justify-center items-center content-center gap-5 overflow-hidden ">
            <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-primary-700 text-2xl lg:text-4xl font-medium  tracking-wide">
                Book your appointment online in just a few clicks and take the
                first step toward better health today.
              </div>
            </div>
            <div className="self-stretch flex-1 p-2.5  rounded-3xl overflow-hidden">
              <iframe
                width="100%"
                height="auto"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl w-full  h-[15.625rem] lg:h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.844203613529!2d86.98761028173925!3d23.681528881099652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f719005eb9b5e5%3A0xd6da4506111bbe3a!2sAvishkar%20Women%20and%20Children%20Hospital!5e0!3m2!1sen!2sin!4v1751968160245!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>

          {/* form start here */}

          <form
            onSubmit={handleSubmit}
            className="w-full flex-1 self-stretch p-2.5 inline-flex flex-col justify-start items-start gap-2.5 lg:gap-5 overflow-hidden"
            id="book_appointment"
          >
            {submitStatus && (
              <div
                className={`self-stretch p-3 rounded-xl ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <div className="self-stretch flex flex-col justify-start items-start lg:gap-3 gap-1">
              <div className="w-full flex flex-col lg:flex-row gap-2">
                <div className="flex-1 p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <label className="justify-start text-black-950 text-base lg:text-xl font-medium">
                    First Name
                  </label>
                  <input
                    className="self-stretch  px-2.5 py-4 lg:px-5 lg:py-4 bg-black-50 rounded-xl flex flex-col justify-start items-start gap-2.5 overflow-hidden text-xs lg:text-base"
                    required
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1 p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <label className="justify-start text-black-950 text-base lg:text-xl font-medium">
                    Last Name
                  </label>
                  <input
                    className="self-stretch lg:px-5 lg:py-4 px-2.5 py-4  bg-black-50 rounded-xl flex flex-col justify-start items-start gap-2.5 overflow-hidden text-xs lg:text-base"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="self-stretch p-2.5 flex flex-col justify-center items-start gap-3.5 overflow-hidden">
                <label className="justify-start text-black-950 text-xl font-medium">
                  Specialty
                </label>
                <select
                  className="self-stretch lg:px-5 lg:py-4 px-2.5 py-4  bg-black-50 text-black-500 rounded-xl inline-flex justify-between items-center overflow-hidden text-xs lg:text-base"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose an option</option>
                  <option value="General Medicine">General Medicine</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Neurology">Neurology</option>
                </select>
              </div>
              <div className="self-stretch inline-flex justify-center items-center overflow-hidden">
                <div className="flex-1 p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <label className="justify-start text-black-950 text-xl font-medium">
                    Date
                  </label>
                  <input
                    className="w-full self-stretch lg:px-5 lg:py-4 px-2.5 py-4  bg-black-50 rounded-xl inline-flex justify-between items-center overflow-hidden text-xs lg:text-base text-black-500"
                    type="date"
                    placeholder="Choose a date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex-1 p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <label className="justify-start text-black-950 text-xl font-medium">
                    Time
                  </label>
                  <input
                    className="self-stretch lg:px-5 lg:py-4 px-2.5 py-4  bg-black-50 rounded-xl inline-flex justify-between items-center overflow-hidden text-xs lg:text-base text-black-500"
                    type="time"
                    placeholder="Choose a time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="self-stretch p-2.5 flex flex-col justify-center items-start gap-3.5 overflow-hidden">
                <label className="justify-start text-black-950 text-xl font-medium">
                  Mobile Number
                </label>
                <div className="self-stretch bg-black-50 text-black-500 rounded-xl inline-flex justify-between items-center overflow-hidden">
                  <select
                    name="countryCode"
                    className="w-24 px-4 py-4 bg-black-50  rounded-xl text-xs lg:text-base text-black-500"
                    value={formData.countryCode}
                    onChange={handleChange}
                    required
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    {/* Add more country codes as needed */}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    className="flex px-5 py-4 w-full bg-black-50 rounded-xl text-xs lg:text-base text-black-500"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    id="phone"
                    placeholder="XXX-XXX-XXX"
                    pattern="[0-9]{10}"
                    title="Please add a ten digit mobile number in the format 1234567890"
                  />
                </div>
              </div>
              <div className="self-stretch p-2.5 flex flex-col justify-center items-start gap-3.5 overflow-hidden">
                <label className="justify-start text-black-950 text-xl font-medium">
                  Email
                </label>
                <input
                  className="self-stretch px-5 py-4 bg-black-50 rounded-xl inline-flex justify-start items-center gap-2.5 overflow-hidden text-xs lg:text-base text-black-500"
                  type="email"
                  placeholder="example@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <button
                type="submit"
                className=" cursor-pointer
 w-full px-7 py-4 bg-primary-800 rounded-[32px] text-white text-xl font-medium hover:bg-primary-900 hover:text-black-50 transition-all duration-300  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book Your Slot"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
