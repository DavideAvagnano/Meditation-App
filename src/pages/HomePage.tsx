import useTimer from "@/hooks/useTimer";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import TimerDialog from "@/components/TimerDialog";

const HomePage = () => {
  const { timer } = useTimer();

  return (
    <>
      <Navbar />
      <Hero />
      <ReviewsCarousel />
      <Faq />
      <Footer />
      {timer.isActive && <TimerDialog />}
    </>
  );
};

export default HomePage;
