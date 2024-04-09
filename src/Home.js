import React from "react";
import Slider from "react-slick";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    //variableWidth: true,
   // variableHeight: true,
  };
  return (
    <Slider {...settings}>
        <div>
        <img src="https://placehold.co/600x400" alt="Image 1" />
      </div>
      <div>
        <img src="https://placehold.co/600x400" alt="Image 2" />
      </div>
      <div>
        <img src="https://placehold.co/600x400" alt="Image 3" />
      </div>
      <div>
        <img src="https://placehold.co/600x400" alt="Image 4" />
      </div>
      <div>
        <img src="https://placehold.co/600x400" alt="image 5" />
      </div>
      {/* Add more divs with images as needed */}
    </Slider>
  );
}