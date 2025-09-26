import React from "react";
import blogs from "../data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Blogs = () => {
  return (
    <>
      <div className="container py-4 px-2 my-4">
        <h2 className="text-center mb-4">Blogs</h2>
        <Swiper
          style={{ height: "450px" }}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={8}
          slidesPerView={3}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
        >
          {blogs.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="blog-card rounded overflow-hidden"
                  data-aos="zoom-in"
                >
                  <div className="blog-img overflow-hidden">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="background p-4">
                    <p>{item.title}</p>
                    <a
                      href={item.link}
                      className="button d-inline-block text-decoration-none mt-4"
                      target="_blank"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Blogs;
