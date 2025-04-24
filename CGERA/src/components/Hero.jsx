import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpeg';
import banner3 from '../assets/banner3.jpeg';
import banner4 from '../assets/banner4.jpeg';
import banner5 from '../assets/banner5.jpeg';
import banner6 from '../assets/banner6.jpeg';
import banner7 from '../assets/banner7.jpeg';
import banner8 from '../assets/banner8.jpeg';

const Hero = () => {
  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  // Array de imágenes para el carrusel
  const carouselImages = [
    {
      src: banner1,
      alt: 'Business people collaborating',
    },
    {
      src: banner2,
      alt: 'Business people collaborating',
    },
    {
      src: banner3,
      alt: 'Business people collaborating',
    },
    {
      src: banner4,
      alt: 'Business people collaborating',
    },
    {
      src: banner5,
      alt: 'Business people collaborating',
    },
    {
      src: banner6,
      alt: 'Business people collaborating',
    },
    {
      src: banner7,
      alt: 'Business people collaborating',
    },
    {
      src: banner8,
      alt: 'Business people collaborating',
    },
  ];

  return (
    <div className="relative bg-blue-600 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <Slider {...settings} className="h-full">
          {carouselImages.map((image, index) => (
            <div key={index} className="h-full">
              <img
                className="w-full min-h-96 object-cover"
                src={image.src}
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-90" />
            </div>
          ))}
        </Slider>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl"
      >
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bienvenido a CGERA - CGE
          </h1>
          <p className="mt-6 text-lg text-white max-w-3xl">
            Desde 2019, estas dos grandes entidades gremiales han unido sus
            fuerzas con un propósito común: impulsar el desarrollo de las PYMES
            y MiPymes argentinas. Con una mirada federal y una visión
            estratégica, trabajamos para acompañar al Sector en la
            Transformación, Innovación y Competitividad, en todo el país.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
