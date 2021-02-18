import React from 'react';
import Carousel from 'components/carousel/banner-carousel';
import BannerImageOne from 'assets/images/slider_01.jpg';
import BannerImageTwo from 'assets/images/slider_02.jpg';
import SliderComponent from './slider-component';

const data = [
  { id: 1, background: BannerImageOne, children: <SliderComponent /> },
  { id: 2, background: BannerImageTwo, children: <SliderComponent /> },
];

export default function HeroBlock(): React.ReactElement {
  return (
    <div className="w-full relative min-h-480px pt-12">
      <Carousel data={data} />
    </div>
  );
}
