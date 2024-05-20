import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GameImage from "./GameImage.jsx";
import { Navigation, Pagination } from "swiper/modules";
import SidePanel from "../../game-page-side-panel/SidePanel.jsx";
import TitleSection from "../../game-page-title-section/TitleSection.jsx";

function GameImagesSlider({ gameData }) {
  const {
    images,
    logo,
    title,
    discount,
    price,
    ratings,
    description,
    additionalInfo,
  } = gameData;

  return (
    <div>
      <TitleSection title={title} ratings={ratings} />
      <div className="mt-4 flex max-md:flex-col">
        <div className="max-sm:w-[400px] sm:w-[500px] lg:w-[700px] xl:w-[900px] 2xl:w-[1050px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={1200}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <GameImage image={image} title={title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <SidePanel
            logo={logo}
            title={title}
            discount={discount}
            price={price}
            additionalInfo={additionalInfo}
          />
        </div>
      </div>
      <div className="rounded-lg border-2 border-custom-emerald p-4 text-custom-white max-xl:-translate-y-14 max-lg:-translate-y-36 max-md:mt-8 max-md:-translate-y-0 max-md:text-[14px] max-sm:w-[400px] sm:w-[500px] md:w-[500px] md:text-sm lg:w-[700px] xl:mt-8 xl:w-[900px] xl:text-lg 2xl:w-[1050px] 2xl:text-xl">
        {description}
      </div>
    </div>
  );
}

export default GameImagesSlider;
