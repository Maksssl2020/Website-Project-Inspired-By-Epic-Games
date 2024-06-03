import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GameImage from "./GameImage.jsx";
import { Navigation, Pagination } from "swiper/modules";
import SidePanel from "../../game-page-side-panel/SidePanel.jsx";
import TitleSection from "../../game-page-title-section/TitleSection.jsx";
import GameRequirementsInfo from "../../game-system-requirements/GameRequirementsInfo.jsx";

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
    <div className="max-3xs:w-[350px] 3xs:w-[400px] sm:w-[500px] lg:w-[700px] xl:w-[900px] 2xl:w-[1050px]">
      <div className="mt-4 flex max-md:flex-col">
        <div className="w-full">
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
      </div>
      <div className="md:hidden">
        <SidePanel
          logo={logo}
          title={title}
          discount={discount}
          price={price}
          additionalInfo={additionalInfo}
        />
      </div>
      <div className="mt-8 rounded-lg border-2 border-custom-emerald p-4 text-custom-white max-md:text-[14px] 2xl:text-xl">
        {description}
      </div>
      <div className="mt-8">
        <GameRequirementsInfo />
      </div>
    </div>
  );
}

export default GameImagesSlider;
