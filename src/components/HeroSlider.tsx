import React from "react";
import sliderImages from "../data/sliderImages.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden py-10 ">
      <Slider {...settings}>
        {sliderImages.map((slide) => (
          <div key={slide.id} className="border-none outline-none">
            <img src={slide.imgUrl} className="block mx-auto " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
