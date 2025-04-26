import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Images from "../Images/S1.jpeg";
import Images1 from "../Images/S2.jpeg";
import Images2 from "../Images/S3.jpeg";

const ImageCarousel = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={2000}
        transitionTime={600}
      >
        <div className="image-carousel">
          <img src={Images} alt="Sale Banner" />
        </div>
        <div className="image-carousel">
          <img src={Images1} alt="New Arrivals" />
        </div>
        <div className="image-carousel">
          <img src={Images2} alt="Exclusive Offers" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
