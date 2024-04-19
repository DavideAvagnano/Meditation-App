import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaXTwitter, FaMeta } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="py-10 bg-dark border-t border-zinc-700">
      <div className="container px-4 md:px-10 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-8 lg:mb-16">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <Link to={"/"} className="text-xl font-bold">
              LOGO
            </Link>
            <p className="text-sm my-5 max-w-xs">SLOGAN COMPANY</p>
          </div>
          <div className="w-full md:w-3/4 lg:w-2/3 px-4">
            <div className="flex flex-wrap justify-between">
              <FooterList title="Company" items={["About us", "Contact us"]} />
              <FooterList
                title="Download"
                items={["Windows App", "Mac App", "Desktop App"]}
              />
              <FooterList
                title="Legal"
                items={["Terms & Conditions", "Privacy Policy"]}
              />
              <FooterList
                title="Resources"
                items={["Yoga Articles", "Practice Guides", "Tips & Tricks"]}
              />
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-700 pt-8">
          <div className="flex justify-center items-center gap-5 mb-8">
            <SocialIcon
              link="https://www.instagram.com/"
              icon={<FaInstagram size={20} />}
            />
            <SocialIcon
              link="https://www.youtube.com/"
              icon={<FaYoutube size={20} />}
            />
            <SocialIcon
              link="https://twitter.com/"
              icon={<FaXTwitter size={20} />}
            />
            <SocialIcon
              link="https://www.facebook.com/"
              icon={<FaMeta size={20} />}
            />
          </div>
          <p className="text-center text-sm">
            © Copyright | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

// Component for each footer list element
interface FooterListProps {
  title: string;
  items: string[];
}

const FooterList = ({ title, items }: FooterListProps) => {
  return (
    <div className="w-1/2 lg:w-1/4 mb-8 lg:mb-0">
      <h3 className="mb-5 text-lg font-bold">{title}</h3>
      <ul className="text-sm">
        {items.map((item, index) => (
          <li key={index} className="mb-3">
            <Link to={"/"} className="hover:text-gray-500">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Component for each social icon
interface SocialIconProps {
  link: string;
  icon: ReactNode;
}

const SocialIcon = ({ link, icon }: SocialIconProps) => {
  return (
    <>
      <Link
        to={link}
        target="_blank"
        className="p-3 border-2 hover:border-primary rounded-full hover:bg-primary/5 group"
      >
        <div className="group-hover:text-primary group-hover:scale-125 transition-all duration-300">
          {icon}
        </div>
      </Link>
    </>
  );
};
