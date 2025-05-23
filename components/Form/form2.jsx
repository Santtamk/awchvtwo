import React from "react";

const Form2 = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-4">
      <form className="w-full flex-1 self-stretch p-2.5 inline-flex flex-col justify-start items-start gap-2.5 lg:gap-5 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start lg:gap-3 gap-1">
          <div className="w-full flex flex-col lg:flex-row gap-2">
            <div className="flex-1 p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <label className="justify-start text-black-950 text-base lg:text-xl font-medium font-['Switzer_Variable']">
                First Name
              </label>
              <input
                className="self-stretch  px-2.5 py-4 lg:px-5 lg:py-4 bg-black-50 rounded-xl flex flex-col justify-start items-start gap-2.5 overflow-hidden text-xs lg:text-base"
                required
                placeholder="First Name"
              />
            </div>
            <div className="flex-1 p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <label className="justify-start text-black-950 text-base lg:text-xl font-medium font-['Switzer_Variable']">
                Last Name
              </label>
              <input
                className="self-stretch lg:px-5 lg:py-4 px-2.5 py-4  bg-black-50 rounded-xl flex flex-col justify-start items-start gap-2.5 overflow-hidden text-xs lg:text-base"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="self-stretch p-2.5 flex flex-col justify-center items-start gap-3.5 overflow-hidden">
            <label className="justify-start text-black-950 text-xl font-medium font-['Switzer_Variable']">
              Specialty
            </label>
            <select className="self-stretch lg:px-5 lg:py-4 px-2.5 py-4  bg-black-50 text-black-500 rounded-xl inline-flex justify-between items-center overflow-hidden">
              <option value="default">Choose an option</option>
              <option value="default">default</option>
              <option value="default">default</option>
              <option value="default">default</option>
            </select>
          </div>
          <div className="self-stretch inline-flex justify-center items-center overflow-hidden">
            <div className="flex-1 p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <label className="justify-start text-black-950 text-xl font-medium font-['Switzer_Variable']">
                Date
              </label>
              <input
                className="w-full self-stretch lg:px-5 lg:py-4 px-2.5 py-4  bg-black-50 rounded-xl inline-flex justify-between items-center overflow-hidden"
                type="date"
                placeholder="Choose a date"
              />
            </div>
            <div className="flex-1 p-2.5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <label className="justify-start text-black-950 text-xl font-medium font-['Switzer_Variable']">
                Time
              </label>
              <input
                className="self-stretch lg:px-5 lg:py-4 px-2.5 py-4  bg-black-50 rounded-xl inline-flex justify-between items-center overflow-hidden"
                type="time"
                placeholder="Choose a time"
              />
            </div>
          </div>
          <div className="self-stretch p-2.5 flex flex-col justify-center items-start gap-3.5 overflow-hidden">
            <label className="justify-start text-black-950 text-xl font-medium font-['Switzer_Variable']">
              Mobile Number
            </label>
            <div className="self-stretch bg-black-50 text-black-500 rounded-xl inline-flex justify-between items-center overflow-hidden">
              <select
                name="countryCode"
                className="w-24 px-4 py-4 bg-black-50 text-black-500 rounded-xl"
                required
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91" selected>
                  +91
                </option>
                <option value="+61">+61</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                className="flex px-5 py-4 w-full bg-black-50 text-black-500 rounded-xl"
                required
              />
            </div>
          </div>
          <div className="self-stretch p-2.5 flex flex-col justify-center items-start gap-3.5 overflow-hidden">
            <label className="justify-start text-black-950 text-xl font-medium font-['Switzer_Variable']">
              Email
            </label>
            <input
              className="self-stretch px-5 py-4 bg-black-50 rounded-xl inline-flex justify-start items-center gap-2.5 overflow-hidden"
              type="email"
              placeholder="example@email.com"
            />
          </div>
        </div>
        <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <button
            type="submit"
            className="w-full px-7 py-4 bg-primary-800 rounded-[32px] text-white text-xl font-medium font-['Switzer_Variable']"
          >
            Book Your Slot
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
