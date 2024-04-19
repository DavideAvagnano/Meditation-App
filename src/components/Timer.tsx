import useTimer from "@/hooks/useTimer";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";
import { VscDebugRestart } from "react-icons/vsc";

const Timer = () => {
  const { timer, handleStart, handlePause, handleReset } = useTimer();
  return (
    <>
      <div className="relative group">
        <div
          className={`absolute -inset-0.5 bg-primary rounded-lg blur-sm group-hover:-inset-1 ${
            timer.isActive ? "animate-tilt" : ""
          }`}
        ></div>
        <div className="relative flex flex-col justify-center items-center gap-14 p-6 rounded-lg bg-dark">
          <div className="text-4xl sm:text-5xl flex items-center justify-center gap-3">
            <RenderTime timeUnit="hours" timeLabel="Hrs" />
            <span>:</span>
            <RenderTime timeUnit="minutes" timeLabel="Min" />
            <span>:</span>
            <RenderTime timeUnit="seconds" timeLabel="Sec" />
          </div>

          <div className="w-full flex justify-around items-center">
            <VscDebugRestart
              onClick={handleReset}
              size={30}
              className="cursor-pointer hover:text-primary active:text-primary/50 scale-[80%] sm:scale-100"
            />
            {timer.isActive ? (
              <FaRegCirclePause
                onClick={handlePause}
                size={30}
                className="cursor-pointer hover:text-primary active:text-primary/50 scale-[80%] sm:scale-100"
              />
            ) : (
              <FaRegCirclePlay
                onClick={handleStart}
                size={30}
                className="cursor-pointer hover:text-primary active:text-primary/50 scale-[80%] sm:scale-100"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Timer;

// Component to stylize the timer rendering
interface RenderTimeProps {
  timeUnit: "hours" | "minutes" | "seconds";
  timeLabel: string;
}

const RenderTime = ({ timeUnit, timeLabel }: RenderTimeProps) => {
  const { timer, formatTime } = useTimer();
  const timeMap = {
    hours: timer.hours,
    minutes: timer.minutes,
    seconds: timer.seconds,
  };
  const timeValue = timeMap[timeUnit];

  return (
    <span className="text-gray-200 relative">
      {formatTime(timeValue)}
      <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-sm sm:text-base text-gray-400">
        {timeLabel}
      </span>
    </span>
  );
};
