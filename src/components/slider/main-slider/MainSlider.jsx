import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MainSliderGamesData } from "../../../website-data/MainSliderGamesData.js";
import LargeGameCard from "../../cards/LargeGameCard.jsx";
import MainSliderButton from "./MainSliderButton.jsx";
import { Autoplay } from "swiper/modules";

function MainSlider() {
  return (
    <div className="3xl:w-[1430px] flex">
      <div className="3xl:w-[1140px] rounded-lg 2xl:w-[940px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={1200}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {MainSliderGamesData.map((data, index) => (
            <SwiperSlide>
              <LargeGameCard key={index} gameData={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="ml-auto flex flex-col justify-center">
        <ul className="space-y-0.5 text-custom-white">
          {MainSliderGamesData.map((data, index) => (
            <li key={index}>
              <MainSliderButton key={index} buttonContent={data} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainSlider;
