import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface MobileMenuItemProps {
  label: string;
  href: string;
  symbol?: ReactNode;
}

const MobileMenuItem = ({ label, href, symbol }: MobileMenuItemProps) => {
  const location = useLocation();

  return (
    <Link
      to={href}
      className={`flex items-center gap-1 p-3 border-l-4 
      ${
        location.pathname === href
          ? "text-primary border-l-primary bg-primary/5"
          : "border-l-transparent hover:text-white hover:border-l-gray-300/50 hover:bg-gray-300/5"
      }`}
    >
      <span>{symbol}</span>
      <span>{label}</span>
    </Link>
  );
};

export default MobileMenuItem;
