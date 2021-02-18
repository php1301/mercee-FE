import React from 'react';
import Button from 'components/button';
import ArrowRight from 'assets/icons/arrow-right';

const SliderComponent: React.FC = () => (
  <div className="w-full lg:w-6/12 text-center lg:text-left flex flex-col items-center lg:items-start">
    <h3 className="text-30px text-gray-900 font-normal mb-4 capitalize">
      <span className="font-bold">Medsy</span>
      {' '}
      provides you
      <span className="font-bold block">Safe Delivery.</span>
    </h3>
    <p className="text-gray-500 mb-40px">
      Get medicines at your home within 30 minutes
    </p>
    <Button variant="elevation">
      <span className="mr-2">Shop Now</span>
      {' '}
      <ArrowRight width="13px" />
    </Button>
  </div>
);

export default SliderComponent;
