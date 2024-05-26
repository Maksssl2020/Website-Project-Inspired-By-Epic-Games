import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { genresData } from "../../../website-data/GenresData.js";
import Genre from "../../browse-page-genres-section/Genre.jsx";
import { Autoplay } from "swiper/modules";

function GenresSlider() {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        speed={1200}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1686: {
            slidesPerView: 5,
          },
          1536: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        modules={[Autoplay]}
      >
        {genresData.map((genre, index) => (
          <SwiperSlide>
            <Genre genreName={genre.name} images={genre.images} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GenresSlider;
