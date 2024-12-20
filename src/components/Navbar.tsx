import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IoHomeOutline, IoTimerOutline } from "react-icons/io5";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;
      setShowNavbar(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <header
      className={`w-full fixed z-50 transition duration-500 bg-dark border-b border-primary/30
      ${
        showBackground
          ? "md:bg-dark/80 backdrop-blur-sm"
          : "md:bg-transparent md:border-none"
      }
      ${showNavbar ? "" : "-translate-y-full"}`}
    >
      <nav className="relative max-w-screen-xl mx-auto px-4 md:px-10 py-6 flex items-center justify-between">
        <Link to={"/"} className="text-xl font-bold">
          LOGO
        </Link>

        <ul className="hidden md:flex gap-10">
          <NavbarItem
            label="Home"
            href="/"
            symbol={<IoHomeOutline size={20} />}
          />
          <NavbarItem
            label="Timer"
            href="/timer"
            symbol={<IoTimerOutline size={20} />}
          />
        </ul>

        <div onClick={toggleMobileMenu} className="md:hidden">
          {showMobileMenu ? (
            <RiCloseFill
              size={25}
              className="cursor-pointer hover:text-primary transition-all"
            />
          ) : (
            <RiMenu3Fill
              size={25}
              className="cursor-pointer hover:text-primary transition-all"
            />
          )}
          <MobileMenu visible={showMobileMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
