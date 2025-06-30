"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/#our_Doctor")}
      className="inline-flex items-center text-sm text-primary-600 hover:text-primary-900  font-medium
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 px-4 py-2 rounded-lg border border-primary-300 hover:bg-primary-100 transition duration-300 cursor-pointer
        shadow-sm hover:shadow-md active:shadow-lg active:bg-primary-200 disabled:opacity
      "
    >
      Back
    </button>
  );
}
       