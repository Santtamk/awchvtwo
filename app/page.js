import AboutUs from "@/components/AboutUs";
import CoreServices from "@/components/CoreServices/CoreServices";
import MainForm from "@/components/Form/MainForm";

import Hero from "@/components/Hero";
import News from "@/components/News/News";
import OurDoctors from "@/components/OurDoctors/OurDoctors";
import PAS from "@/components/PeopleAreSaying/PAS";
import NewVideo from "@/components/swiper/newtry";
// import NewSwiper from "@/components/swiper/newtry";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <CoreServices />
      <OurDoctors />
      <News />
      <VideoSection />
      <PAS />
      <MainForm />
    </>
  );
}
