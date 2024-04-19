import React, {
  ReactNode,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import radar from "../assets/audio/radar-alarm.mp3";

// Interface to define types of Timer props
interface Timer {
  seconds: number;
  minutes: number;
  hours: number;
  isActive: boolean;
}

// Interface to define type of all TimerContext props
interface TimerContextType {
  timer: Timer;
  setTimer: React.Dispatch<React.SetStateAction<Timer>>;
  formatTime: (num: number) => string | number;
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
  stopAudio: () => void;
  audioPlaying: boolean;
}

// Create Context
export const TimerContext = createContext<TimerContextType | undefined>(
  undefined
);

// Component which provides timer status and timer management functions
export const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [timer, setTimer] = useState<Timer>({
    seconds: 0,
    minutes: 0,
    hours: 0,
    isActive: false,
  });

  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (timer.isActive) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          const totalSeconds =
            prevTimer.hours * 3600 + prevTimer.minutes * 60 + prevTimer.seconds;

          const newTotalSeconds = Math.max(totalSeconds - 1, 0);

          const newHours = Math.floor(newTotalSeconds / 3600);
          const newMinutes = Math.floor((newTotalSeconds % 3600) / 60);
          const newSeconds = newTotalSeconds % 60;

          if (newTotalSeconds === 0) {
            clearInterval(intervalId);
            handleReset();
            if (audioRef.current) {
              audioRef.current.play();
              setAudioPlaying(true);
            }
          }

          return {
            ...prevTimer,
            hours: newHours,
            minutes: newMinutes,
            seconds: newSeconds,
          };
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
      if (timer.isActive && audioPlaying && audioRef.current) {
        audioRef.current.pause();
        setAudioPlaying(false);
      }
    }

    return () => clearInterval(intervalId);
  }, [timer.isActive, audioPlaying]);

  const formatTime = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  const handleStart = () => {
    setTimer((prevTimer) => ({
      ...prevTimer,
      isActive: true,
    }));

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const handlePause = () => {
    setTimer((prevTimer) => ({
      ...prevTimer,
      isActive: false,
    }));
  };

  const handleReset = () => {
    setTimer({
      hours: 0,
      minutes: 0,
      seconds: 0,
      isActive: false,
    });
  };

  const stopAudio = () => {
    if (audioPlaying && audioRef.current) {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={radar} loop />
      <TimerContext.Provider
        value={{
          timer,
          setTimer,
          formatTime,
          handleStart,
          handlePause,
          handleReset,
          stopAudio,
          audioPlaying,
        }}
      >
        {children}
      </TimerContext.Provider>
    </>
  );
};
