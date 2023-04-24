import React from "react";
import items from "../data/items.json";
import StoreItem from "./StoreItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const recommendItems = items.slice(3, 9);

const Recommendations = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="mx-auto py-8">
      <div className="flex justify-center items-center italic text-xl">
        <span className="w-full h-1/2 border-slate-200 border-b-2"></span>
        <h2 className="px-2 whitespace-nowrap font-light">
          Our Recommendations
        </h2>
        <span className="w-full h-1/2 border-slate-200 border-b-2"></span>
      </div>
      <div className="p-5 sm:p-10">
        <Slider {...settings}>
          {recommendItems.map((item, index) => (
            <StoreItem key={item.id} {...item} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recommendations;
