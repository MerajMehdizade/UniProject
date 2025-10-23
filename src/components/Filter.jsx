import React, { useState, useMemo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import tomanIcon from "../assets/image/icons/toman.png";

const categoriesMap = {
  smartphones: "موبایل",
  laptops: "لپ‌تاپ",
  tablets: "تبلت",
};

const generateRandomColors = () => {
  const colors = [
    "#000",
    "#FFF",
    "#F00",
    "#0F0",
    "#00F",
    "#FF0",
    "#0FF",
    "#888",
  ];
  let result = [];
  while (result.length < 3) {
    const c = colors[Math.floor(Math.random() * colors.length)];
    if (!result.includes(c)) result.push(c);
  }
  return result;
};

export default function Filter({ initialCategory = "smartphones" }) {
  const [products, setProducts] = useState({});
  const [selected, setSelected] = useState(initialCategory);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = {};
      for (let key of Object.keys(categoriesMap)) {
        try {
          const res = await fetch(
            `https://dummyjson.com/products/category/${key}?limit=7`
          );
          const data = await res.json();
          result[key] = data.products.map((p) => ({
            title: p.title,
            subtitle: p.description,
            price: p.price.toLocaleString(),
            rating: p.rating,
            reviews: p.stock, // استفاده از stock به عنوان تعداد بررسی
            colors: generateRandomColors(),
            image: p.thumbnail,
          }));
        } catch (e) {
          console.error(e);
          result[key] = [];
        }
      }
      setProducts(result);
    };
    fetchData();
  }, []);

  const categories = useMemo(() => {
    return [...Object.keys(products), "همه محصولات"];
  }, [products]);

  const items = useMemo(() => {
    if (selected === "همه محصولات") {
      return Object.values(products).flat();
    }
    return products[selected] || [];
  }, [selected, products]);

  return (
    <div className="mt-5 md:my-8 font-yekanBakhRegular">
      <div className="flex flex-col gap-4">
        {/* filter buttons */}
        <div className="bg-white px-4 pt-4 w-fit md:w-full">
          <a
            onClick={() => setIsMobileFilterOpen(true)}
            href="#selectCategory"
            class="filter-mobile md:hidden border border-zinc-200 bg-orange-500 p-4 block z-10 rounded-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm106.18,74.58A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.47L40,56H216Z"></path>
            </svg>
          </a>

          <div
            className={`space-y-5 fixed transform md:translate-y-0 transition-transform duration-300 ease-in-out md:static bottom-0 right-3 z-[15] bg-white w-11/12 md:w-full shadow-2xl md:shadow-none border border-zinc-300 md:border-0 pb-5 px-5 md:px-0 rounded-t-2xl md:rounded-none ${
              isMobileFilterOpen ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="md:hidden mt-5 text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 inline-flex items-center"
            >
              ✕
            </button>
            <h2 className="font-yekanBakhSemiBold">دسته‌بندی‌ها</h2>
            <ul className="space-y-2 text-sm md:flex gap-x-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setSelected(cat);
                      setIsMobileFilterOpen(false);
                    }}
                    className={`category-btn text-right w-full px-4 py-2 rounded-lg hover:bg-zinc-100 cursor-pointer text-sm ${
                      selected === cat ? "bg-zinc-100 text-orange-300" : ""
                    }`}
                  >
                    {categoriesMap[cat] || cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* slider section */}
        <div className="bg-white rounded-xl border border-zinc-100 px-4 pb-3">
          <div className="containerPSlider">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="selectCategory"
            >
              {items.length === 0 ? (
                <SwiperSlide key="empty">
                  <div className="text-center text-zinc-400 py-8">
                    محصولی یافت نشد.
                  </div>
                </SwiperSlide>
              ) : (
                items.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="card-wrapper swiper-wrapper">
                      <div className="card swiper-slide bg-white border border-zinc-200 rounded-2xl p-2 md:p-3 text-sm hover:shadow-custom transition">
                        <a
                          href="#"
                          className="text-zinc-800 flex justify-center mb-10"
                        >
                          <img
                            className="rounded-xl mb-3 w-[190px] h-[190px] object-cover"
                            src={item.image}
                            alt={item.title}
                          />
                        </a>
                        <p className="text-zinc-400 text-xs">{item.title}</p>
                        <a
                          href="#"
                          className="text-zinc-800 text-xs md:text-sm h-8 lg:h-10 line-clamp-2 mt-2"
                        >
                          {item.subtitle}
                        </a>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex gap-1.5">
                            {item.colors.map((color, index) => (
                              <div
                                key={index}
                                className="size-4 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <div className="flex items-start gap-x-1 text-xs text-zinc-500">
                            <span>
                              ({item.reviews}) {item.rating}
                            </span>
                            <svg
                              className="fill-orange-400"
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 256 256"
                            >
                              <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex items-center justify-end border-t border-dashed border-zinc-300 mt-4 pt-2">
                          <div className="text-zinc-800 flex items-center gap-x-1 justify-end font-yekanBakhBold text-lg">
                            {item.price}
                            <img
                              className="size-4"
                              src={tomanIcon.src}
                              alt="تومان"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
