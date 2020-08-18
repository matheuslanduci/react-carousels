import * as React from "react";

interface ICarouselProps {
  items: any[];
}

const SimpleCarousel: React.FC<ICarouselProps> = ({ items }) => {
  return <div className="simple-carousel">{items.map((item) => item)}</div>;
};

export default SimpleCarousel;
