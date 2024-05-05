import GameCard from "../../cards/GameCard.jsx";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

function GameCardsSlider({ gameCards }) {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {gameCards.map((game, index) => (
          <SwiperSlide key={index} className="mx-1 my-4">
            <GameCard gameData={game} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GameCardsSlider;
