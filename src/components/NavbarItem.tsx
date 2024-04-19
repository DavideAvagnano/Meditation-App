import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarItemProps {
  label: string;
  href: string;
  symbol?: ReactNode;
}

const NavbarItem = ({ label, href, symbol }: NavbarItemProps) => {
  const location = useLocation();

  return (
    <Link
      to={href}
      className={`cursor-pointer group/item ${
        location.pathname === href ? "text-primary" : ""
      }`}
    >
      <li className="flex items-center gap-1 font-semibold transition-all group-hover/item:text-primary group-hover/item:underline group-hover/item:underline-offset-4">
        <span>{symbol}</span>
        <span>{label}</span>
      </li>
    </Link>
  );
};

export default NavbarItem;
