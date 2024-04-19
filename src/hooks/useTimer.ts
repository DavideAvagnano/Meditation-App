import { useContext } from "react";
import { TimerContext } from "@/providers/TimerContext";

const useTimer = () => {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error(
      "useTimer deve essere utilizzato all'interno di un TimerProvider"
    );
  }

  return context;
};

export default useTimer;
