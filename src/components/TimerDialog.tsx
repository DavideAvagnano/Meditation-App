import { IoTimerOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Timer from "./Timer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const TimerDialog = () => {
  return (
    <Dialog>
      <div className="fixed top-24 right-5 md:right-10 lg:right-14 xl:right-24 2xl:right-32">
        <DialogTrigger className="relative animate-pulse hover:animate-none">
          <div className="absolute -inset-1.5 bg-primary rounded-full blur-sm"></div>
          <Button variant={"dialog"}>
            <IoTimerOutline size={20} /> Active
          </Button>
        </DialogTrigger>
        <DialogContent>
          <Timer />
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default TimerDialog;
