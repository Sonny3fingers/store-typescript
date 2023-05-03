import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type SliderImageProps = {
  id: string;
  imgUrl: string;
};

type SliderImagesProps = SliderImageProps[];

const sliderImages = [
  {
    id: 1,
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/magic-bookshelf-app.appspot.com/o/heroSliderImages%2Fhero-slider-2-min.png?alt=media&token=cf25c8fc-337a-431d-80d7-3973808cb75a",
  },
  {
    id: 2,
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/magic-bookshelf-app.appspot.com/o/heroSliderImages%2Fhero-slider-1-min.png?alt=media&token=f5be89a0-8439-4923-a3ff-f6c683fe8188",
  },
  {
    id: 3,
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/magic-bookshelf-app.appspot.com/o/heroSliderImages%2Fhero-slider-3-min.png?alt=media&token=acc4c587-f6ce-43e4-94ce-16dc257653a6",
  },
];

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
