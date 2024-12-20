import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import HeroBgImage from "../assets/images/heroSection.jpg";

const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${HeroBgImage})` }}
        className={`w-full min-h-[130vw] sm:min-h-[90vw] lg:min-h-[70vw] xl:min-h-[60vw] 2xl:min-h-[50vw] bg-no-repeat bg-cover bg-right bg-fixed bg-blend-overlay bg-dark/65`}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-10 pt-52 lg:pt-72">
          <h1 className="flex flex-col gap-2 font-semibold text-3xl md:text-4xl lg:text-5xl font-serif italic text-primary/90">
            <span>Unlock Your Potential</span>
            <span>Through Meditation</span>
          </h1>
          <p className="mt-6 md:mt-10 md:w-3/4 md:leading-7 lg:text-lg">
            Discover a path to mental and spiritual well-being , unlock your
            full potential, find mental clarity, and connect with yourself. Join
            us on the journey to inner serenity through meditation.
          </p>
          <div className="mt-6 md:mt-10">
            <Link to={"/timer"}>
              <Button variant={"hero"} size={"hero"}>
                START NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
