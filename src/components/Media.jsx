import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import media from "../data/media";

const Media = () => {
  return (
    <>
      <div className="container-fluid py-4 px-2 my-4 background">
        <h2 className="text-center mb-4">Media feature</h2>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={8}
          loop={true}
          freeMode={true}
          allowTouchMove={false} // disable dragging if you only want auto scroll
          speed={3000} // 👈 control smoothness (higher = slower scroll)
          autoplay={{
            delay: 0, // 👈 no delay between transitions
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 50 },
            576: { slidesPerView: 6, spaceBetween: 50 },
            1000: { slidesPerView: 8, spaceBetween: 50 },
          }}
        >
          {media.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="media-card">
                <img src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Media;
