import React from "react";
import debtStress from "../data/debtStress";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const DebtStress = () => {
  return (
    <>
      <div className="container py-4 mb-5 px-2">
        <h2 className="text-center mb-4">
          Debt Stress Leading to Mental Health Struggles
        </h2>
        <div>
          <Swiper
            style={{ height: "200px" }}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={8}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
          >
            {debtStress.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="debt-stress-card" data-aos="zoom-in">
                  <p className="red-text">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DebtStress;
