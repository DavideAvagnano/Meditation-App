import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="flex items-center">
        <span className="border-r border-r-zinc-600 p-4 text-2xl">404</span>
        <p className="p-4 text-sm">This page could not be found</p>
      </div>
      <Link to={"/"} className="mt-5">
        <Button className="border-none text-gray-300 bg-zinc-900 hover:bg-zinc-800">
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
