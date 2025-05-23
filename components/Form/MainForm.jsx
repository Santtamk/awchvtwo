import Image from "next/image";
import React from "react";

const MainForm = () => {
  return (
    <div className="self-stretch bg-black-50 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden lg:p-24">
      <div className=" flex flex-col justify-start items-center gap-5">
        <div className="self-stretch flex flex-col justify-start items-center">
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-950 text-4xl lg:text-5xl font-bold font-sora tracking-wide">
              Schedule Your Visit at AWCH
            </div>
          </div>
          <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch text-center justify-start text-black-700 text-base lg:text-xl font-normal font-['Switzer_Variable']">
              Whether it's a routine check-up or a specialist consultation, our
              team is here to support your health journey with compassion and
              expertise.
            </div>
          </div>
        </div>
        <div className=" bg-primary-100 rounded-[32px] inline-flex justify-center items-center gap-2.5 overflow-hidden flex-col-reverse lg:flex-row">
          <div className="flex-1 self-stretch p-2.5 inline-flex flex-col justify-center items-center content-center gap-2.5 overflow-hidden">
            <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5 overflow-hidden">
              <div className="self-stretch justify-start text-primary-700 text-5xl font-medium font-sora">
                Book your appointment online in just a few clicks and take the
                first step toward better health today.
              </div>
            </div>
            <div className="self-stretch flex-1 p-2.5  rounded-3xl overflow-hidden">
              <iframe
                width="100%"
                height="440"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl w-full h-[440px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27783.883082850258!2d86.96112987585762!3d23.684148679443517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f0ea1022529%3A0xf888f7e7fd11cefe!2sAsansol%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1747991543573!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>

          {/* form start here */}

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
                    <option defaultValue="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
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
      </div>
    </div>
  );
};

export default MainForm;
