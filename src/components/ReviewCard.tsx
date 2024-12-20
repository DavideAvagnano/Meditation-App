import { Review } from "./ReviewsCarousel";
import { Card } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { name, text, rating, date, image } = review;

  const ratingStar = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-star-${i}`} />);
    }

    return stars;
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <CarouselItem className="lg:basis-1/2">
      <Card className="aspect-square p-5">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={image} alt="@shadcn" />
          </Avatar>
          <div className="ml-5 flex flex-col gap-2">
            <p className="font-semibold">{name}</p>
            <span className="flex text-primary">{ratingStar(rating)}</span>
          </div>
        </div>
        <p className="my-5 text-sm md:text-base">{text}</p>
        <span className="font-semibold text-xs md:text-sm">
          {formatDate(date)}
        </span>
      </Card>
    </CarouselItem>
  );
};

export default ReviewCard;
