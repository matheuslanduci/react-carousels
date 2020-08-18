import * as React from "react";

interface ICarouselProps {
  items: any[];
}

const DragCarousel: React.FC<ICarouselProps> = ({ items }) => {
  return (
    <div className="drag-carousel-container">
      <div
        className="drag-carousel"
        onWheel={(e) => {          
          if (e.deltaY > 0) {
            e.currentTarget.scrollBy(300, 0);
          } else {
            e.currentTarget.scrollBy(-300, 0);
          }
        }}
      >
        {items.map((item) => (
          <div className="drag-carousel-item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default DragCarousel;
