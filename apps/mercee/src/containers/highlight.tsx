import React from 'react';
import Carousel from 'components/carousel/carousel';
import CouponImg from 'assets/images/coupon-card.png';
import OrderImg from 'assets/images/custom-order.png';
import DeliveryImg from 'assets/images/fast-delivery.png';
import FemaleCareImg from 'assets/images/female-care.png';

const data = [
  {
    id: 1,
    image: DeliveryImg,
    link: '#',
    title: 'Fast delivery',
  },
  {
    id: 2,
    image: CouponImg,
    link: '#',
    title: 'Coupon savings',
  },
  {
    id: 3,
    image: OrderImg,
    link: '#',
    title: 'Custom order',
  },
  {
    id: 4,
    image: FemaleCareImg,
    link: '#',
    title: 'Female care',
  },
];

export default function Highlight(): React.ReactElement {
  return (
    <div className="w-full relative my-35px">
      <Carousel data={data} itemClass="px-5px" />
    </div>
  );
}
