import * as React from "react";
import Slider from "infinite-react-carousel";
import { images } from "./CarouselConfig";

import "./Carousel.scss";

const Carousel = () => {
  return (
    <div className={"carousel"}>
      <Slider autoplay={true}>
        {images.map(image => (
          <img src={image.url} />
        ))}
      </Slider>
      <div className={"consultationBlock"}>
        <button>Book Consultation</button>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Carousel;
