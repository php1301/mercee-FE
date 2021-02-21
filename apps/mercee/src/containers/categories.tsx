import CategoryCard from 'components/category-card';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import {
  ArrowButtonBase,
  ButtonGroupBase,
  NextButtonRadius,
  PrevButtonRadius,
} from 'components/utils/theme';
import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';

interface Props {
  data: any;
}
SwiperCore.use([Navigation]);
const breakpoints = {
  600: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 4,
  },
  1024: {
    slidesPerView: 5,
  },
  1200: {
    slidesPerView: 6,
  },
  1400: {
    slidesPerView: 8,
  },
  1900: {
    slidesPerView: 8,
  },
};

const Categories = React.forwardRef(({ data }: Props, ref: React.RefObject<HTMLDivElement>) => (
  <div className="category pt-8" ref={ref}>
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      navigation={{
        prevEl: '.swiper-previous-button',
        nextEl: '.swiper-next-button',
      }}
      breakpoints={breakpoints}
    >
      {data?.map((current) => (
        <SwiperSlide key={current.id}>
          <CategoryCard
            id={current.id}
            imageUrl={current.image_icon_url}
            name={current.name}
          />
        </SwiperSlide>
      ))}
      <div className={`${ButtonGroupBase} z-10`}>
        <button
          aria-label="prev-button"
          type="button"
          className={
                  `${ArrowButtonBase
                  } ${
                    PrevButtonRadius
                  } `
                  + 'swiper-previous-button'
                }
        >
          <ChevronLeft height="12px" />
        </button>
        <button
          type="button"
          aria-label="next-button"
          className={
                  `${ArrowButtonBase
                  } ${
                    NextButtonRadius
                  } `
                  + 'swiper-next-button'
                }
        >
          <ChevronRight height="12px" />
        </button>
      </div>
    </Swiper>
  </div>
));
export default Categories;
