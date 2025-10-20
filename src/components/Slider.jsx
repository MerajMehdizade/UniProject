import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider from "../assets/image/heroSlider/1.webp";

export default function Slider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="heroSlider rounded-2xl md:rounded-4xl relative"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <a href="#">
            <img
              className="w-full h-44 md:h-80 object-cover object-bottom"
              src={slider.src}
              alt=""
            />
          </a>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <a href="#">
            <img
              className="w-full h-44 md:h-80 object-cover object-bottom"
              src={slider.src}
              alt=""
            />
          </a>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <a href="#">
            <img
              className="w-full h-44 md:h-80 object-cover object-bottom"
              src={slider.src}
              alt=""
            />
          </a>
        </SwiperSlide>

        {/* SVG های تزئینی */}
        <svg
          className="absolute -left-2 rotate-180 top-10 z-10 w-auto hidden md:block"
          width="70"
          height="255"
          viewBox="0 0 76 285"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_6_41)">
            <path
              d="M70 275V10C70 86 14 91.0878 14 142.752C14 194.416 70 201 70 275Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_d_6_41"
              x="0"
              y="0"
              width="76"
              height="285"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dx="-4"></feOffset>
              <feGaussianBlur stdDeviation="5"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_6_41"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_6_41"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>

        <svg
          className="absolute -right-2 top-10 z-10 w-auto hidden md:block"
          width="70"
          height="255"
          viewBox="0 0 76 285"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_6_41)">
            <path
              d="M70 275V10C70 86 14 91.0878 14 142.752C14 194.416 70 201 70 275Z"
              fill="white"
            ></path>
          </g>
        </svg>

        <svg
          className="absolute left-1/2 -translate-x-1/2 w-96 -bottom-3 z-10 rotate-180 hidden md:block"
          style={{
            filter: "drop-shadow( 0 -7px 25px rgba(0, 0, 0, .3) )",
          }}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 480 110"
          width="480"
          height="110"
        >
          <defs>
            <path
              d="M-607 -202L1073 -202L1073 0C679.8 0 461.36 0 417.67 0C368 0 358 50 327.34 50C310.37 50 174.64 50 157.67 50C128 50 118 0 67 0C22.07 0 -202.6 0 -607 0L-607 -202Z"
              id="dixoAXFOW"
            ></path>
          </defs>
          <use
            xlinkHref="#dixoAXFOW"
            opacity="1"
            fill="#ffffff"
            fillOpacity="1"
          ></use>
        </svg>
      </Swiper>
    </div>
  );
}
