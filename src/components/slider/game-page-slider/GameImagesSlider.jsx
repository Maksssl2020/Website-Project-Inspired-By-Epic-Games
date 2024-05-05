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
      <div className="mt-4 flex">
        <div className="h-[585px] w-[1050px] rounded-lg">
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

        <SidePanel
          logo={logo}
          title={title}
          discount={discount}
          price={price}
          additionalInfo={additionalInfo}
        />
      </div>
      <div className="mt-8 w-[1050px] rounded-lg border-2 border-custom-emerald p-4 text-xl text-custom-white">
        {description}
      </div>
    </div>
  );
}

export default GameImagesSlider;
