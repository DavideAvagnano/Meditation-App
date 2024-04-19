import useTimer from "@/hooks/useTimer";
import { Button } from "./ui/button";
import { GiPartyPopper } from "react-icons/gi";

const TimerToast = () => {
  const { audioPlaying, stopAudio } = useTimer();

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 bg-dark p-4 flex items-center justify-center gap-5 rounded-lg shadow-md shadow-primary transition-all duration-500 ease-in-out z-[9999] 
      ${audioPlaying ? "top-5" : "-top-28"}`}
    >
      <div className="flex items-center">
        Congratulations{" "}
        <GiPartyPopper size={30} className="ml-2 text-primary" />
      </div>
      <Button onClick={stopAudio}>Stop</Button>
    </div>
  );
};

export default TimerToast;
