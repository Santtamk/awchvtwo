"use client";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/#our_Doctor")}
      className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-900 font-medium
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 
        px-4 py-2 rounded-lg border border-primary-300 hover:bg-primary-50 transition-all duration-300 
        cursor-pointer shadow-sm hover:shadow-md active:shadow-lg active:bg-primary-100 

        hover:border-primary-400 group"
    >
      <IoArrowBack 
        size={16}
        className="transition-transform duration-300 group-hover:-translate-x-1"
      />
      <span>Back to Doctors</span>
    </button>
  );
}
       