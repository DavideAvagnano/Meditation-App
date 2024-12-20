import MobileMenuItem from "./MobileMenuItem";
import { IoHomeOutline } from "react-icons/io5";
import { IoTimerOutline } from "react-icons/io5";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu = ({ visible }: MobileMenuProps) => {
  return (
    <ul
      className={`bg-dark absolute left-0 right-0 top-full flex flex-col gap-1 transition-all duration-500 
      ${!visible ? "translate-x-full" : "translate-x-0"}`}
    >
      <MobileMenuItem
        label="Home"
        href="/"
        symbol={<IoHomeOutline size={20} />}
      />
      <MobileMenuItem
        label="Timer"
        href="/timer"
        symbol={<IoTimerOutline size={20} />}
      />
    </ul>
  );
};

export default MobileMenu;
