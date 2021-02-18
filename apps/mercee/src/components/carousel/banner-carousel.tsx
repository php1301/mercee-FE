import React from 'react';
import MultiCarousel from 'react-multi-carousel';

import ChevronLeft from 'assets/icons/chevron-left';
import ChevronRight from 'assets/icons/chevron-right';

import {
  NavButtonGroupBase,
  NavArrowButtonBase,
  NavPrevButtonRadius,
  NavNextButtonRadius,
  HeroCarouselBase,
} from 'components/utils/theme';

type CustomButtonProps = {
  onClick?: (e: any) => void;
  children: React.ReactNode;
};

type ButtonGroupProps = {
  next?: () => void;
  previous?: () => void;
};

interface CarouselItemProps {
  id: number;
  background?: string;
  children: React.ReactNode | undefined
}

type CarouselProps = {
  data: CarouselItemProps[];
  autoPlay?: boolean;
  infinite?: boolean;
  itemClass?: string;
  className?: string;
  containerClass?: string;
};

const PrevButton: React.FC<CustomButtonProps> = ({ onClick, children }) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    aria-label="prev-button"
    type="button"
    className={`${NavArrowButtonBase} ${NavPrevButtonRadius}`}
  >
    {children}
  </button>
);

const NextButton: React.FC<CustomButtonProps> = ({ onClick, children }) => (
  <button
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    aria-label="next-button"
    type="button"
    className={`${NavArrowButtonBase} ${NavNextButtonRadius}`}
  >
    {children}
  </button>
);

const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => (
  <div className={NavButtonGroupBase}>
    <PrevButton onClick={() => previous()}>
      <ChevronLeft height="12px" />
    </PrevButton>
    <NextButton onClick={() => next()}>
      <ChevronRight height="12px" />
    </NextButton>
  </div>
);
const responsive = {
  desktop: {
    breakpoint: { max: 3600, min: 0 },
    items: 1,
  },
};

const Carousel: React.FC<CarouselProps> = ({
  data,
  autoPlay,
  infinite,
  itemClass,
  className,
  containerClass,
  ...props
}) => (
  <MultiCarousel
    arrows={false}
    responsive={responsive}
    ssr
    showDots={false}
    slidesToSlide={1}
    infinite={infinite}
    containerClass={containerClass}
    itemClass={itemClass}
    autoPlay={autoPlay}
    autoPlaySpeed={3000}
    renderButtonGroupOutside
    additionalTransfrom={0}
    customButtonGroup={<ButtonGroup />}
    className={className}
    {...props}
  >
    {data.map((item) => (
      <div
        className={`${HeroCarouselBase} 'hero-carousel-item-base'`}
        style={{
          backgroundImage: `url(${item.background})`,
          backgroundColor: '#F5FAFB',
        }}
        key={item.id}
      >
        {item.children}
      </div>
    ))}
  </MultiCarousel>
);

const defaultProps = {
  autoPlay: false,
  infinite: true,
  className: '',
};

Carousel.defaultProps = defaultProps;

export default Carousel;
