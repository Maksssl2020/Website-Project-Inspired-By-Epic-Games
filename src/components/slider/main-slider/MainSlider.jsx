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
    <div className="flex">
      <div className="h-full w-full rounded-lg max-2xs:hidden xs:w-[450px] sm:w-[525px] md:h-[310px] md:w-[550px] lg:h-[430px] lg:w-[760px] xl:h-[530px] xl:w-[940px] 2xl:h-[640px] 2xl:w-[1140px]">
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
      <div className="ml-5 flex flex-col justify-center max-md:hidden">
        <ul className="space-y-0.5 text-custom-white">
          {MainSliderGamesData.map((data, index) => (
            <li key={index}>
              <MainSliderButton
                key={index}
                buttonContent={data}
                linkData={data.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainSlider;
