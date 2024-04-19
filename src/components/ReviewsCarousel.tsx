import { useEffect, useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import reviewsData from "../assets/reviews.json";
import ReviewCard from "./ReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  date: string;
  image: string;
}

const ReviewsSlider = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  // simulating fetch API
  useEffect(() => {
    try {
      setReviews(reviewsData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center p-20 bg-dark bg-gradient-to-b from-primary/5 from-50% text-gray-200">
        <div className="flex flex-col justify-center items-center gap-5 mb-10 font-semibold">
          <h3 className="flex items-center text-2xl gap-3">
            <PiStarFourFill className="text-primary" />
            Reviews
          </h3>
          <span>
            What Our Customer Say{" "}
            <span className="text-primary underline underline-offset-4">
              About Us
            </span>
          </span>
        </div>

        <Carousel className="w-full max-w-xs md:max-w-sm lg:max-w-3xl">
          <CarouselContent>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default ReviewsSlider;
