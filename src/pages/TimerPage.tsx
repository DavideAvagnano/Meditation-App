import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Timer from "@/components/Timer";
import TimerSetting from "@/components/TimerSetting";

import { BsArrow90DegDown } from "react-icons/bs";
import BgImage from "../assets/images/timerPage.jpg";

const TimerPage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${BgImage})` }}
        className={`w-full min-h-screen bg-no-repeat bg-cover bg-fixed bg-top bg-blend-overlay bg-dark/75 flex flex-col justify-center items-center gap-20`}
      >
        <div className="flex flex-col justify-center items-center gap-5 font-semibold">
          <h3 className="text-2xl">
            Set your timer and start{" "}
            <span className="text-primary underline underline-offset-4">
              Meditating
            </span>
          </h3>
          <p className="relative mt-5 mb-2 text-xl text-primary underline underline-offset-4">
            Click Here!
            <BsArrow90DegDown
              size={30}
              className="absolute -rotate-[45deg] -left-5 -bottom-12 text-primary"
            />
            <BsArrow90DegDown
              size={30}
              className="absolute rotate-[45deg] -scale-x-100 -right-5 -bottom-12 text-primary"
            />
          </p>
          <TimerSetting />
        </div>
        <Timer />
      </div>
      <Footer />
    </>
  );
};

export default TimerPage;
