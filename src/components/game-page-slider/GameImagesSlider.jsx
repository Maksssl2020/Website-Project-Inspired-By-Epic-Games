import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GameImage from "./GameImage.jsx";
import { Navigation, Pagination } from "swiper/modules";
import SidePanel from "../game-page-side-panel/SidePanel.jsx";

function GameImagesSlider() {
  return (
    <div>
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
            <SwiperSlide>
              <GameImage
                image={
                  "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/02/manor-lords-release-date.jpg"
                }
                title={"Manor Lords"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <GameImage
                image={
                  "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/02/manor-lords-release-date.jpg"
                }
                title={"Manor Lords"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <GameImage
                image={
                  "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/02/manor-lords-release-date.jpg"
                }
                title={"Manor Lords"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <GameImage
                image={
                  "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/02/manor-lords-release-date.jpg"
                }
                title={"Manor Lords"}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <SidePanel />
      </div>
      <div className="mt-8 w-[1050px] rounded-lg border-2 border-custom-emerald p-4 text-xl text-custom-white">
        Manor Lords is a medieval strategy game featuring in-depth city
        building, large-scale tactical battles, and complex economic and social
        simulations. Rule your lands as a medieval lord -- the seasons pass, the
        weather changes, and cities rise and fall. Manor Lords is a strategy
        game that allows you to experience the life of a medieval lord. Grow
        your starting village into a bustling city, manage resources and
        production chains, and expand your lands through conquest. Inspired by
        the art and architecture of late 14th century Franconia, Manor Lords
        prioritizes historical accuracy wherever possible, using it to inform
        gameplay mechanics and visuals alike. Common medieval tropes are avoided
        in favor of historical accuracy in order to make the world feel more
        authentic, colorful, and believable.
      </div>
    </div>
  );
}

export default GameImagesSlider;
