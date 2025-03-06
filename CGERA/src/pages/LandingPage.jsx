import React from 'react';
import Carousel from '../components/Carousel';

const LandingPage = () => {
  return (
    <div
      className="bg-green-400 col-span-5 flex flex-col justify-center items-center mx-5 p-4"
      data-aos="fade-right"
    >
      <Carousel />
    </div>
  );
};

export default LandingPage;
