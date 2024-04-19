import useTimer from "@/hooks/useTimer";
import { ChangeEvent, FormEvent, useState } from "react";
import { IoTimerOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FormData {
  hours: string;
  minutes: string;
  seconds: string;
}

const TimerSetting = () => {
  const { timer, setTimer } = useTimer();
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    hours: "",
    minutes: "",
    seconds: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { hours, minutes, seconds } = formData;
    setTimer({
      ...timer,
      hours: parseInt(hours) || 0,
      minutes: parseInt(minutes) || 0,
      seconds: parseInt(seconds) || 0,
    });
    setFormData({ hours: "", minutes: "", seconds: "" });
    setPopoverVisible(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to modulate the rendering of input fields
  const renderInputField = (name: keyof FormData, placeholder: string) => (
    <div className="grid grid-cols-3 items-center gap-4">
      <Label htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Label>
      <Input
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="col-span-2 h-8"
      />
    </div>
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"timer"}
          size={"timer"}
          onClick={() => setPopoverVisible(true)}
        >
          <IoTimerOutline
            size={30}
            className="text-primary group-hover:scale-125 transition-all duration-300"
          />
        </Button>
      </PopoverTrigger>

      {popoverVisible && (
        <PopoverContent className={`w-80`}>
          <div className="grid gap-5">
            <div className="space-y-1 text-sm text-center text-zinc-400">
              <p>Make changes to your timer here.</p>
              <p>Click save when you're done.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-2">
              {renderInputField("hours", "hours...")}
              {renderInputField("minutes", "minutes...")}
              {renderInputField("seconds", "seconds...")}

              <div className="flex justify-end mt-5">
                <Button
                  variant={"hero"}
                  type="submit"
                  className="active:bg-transparent"
                >
                  Save changes
                </Button>
              </div>
            </form>
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default TimerSetting;
