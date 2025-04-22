import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import banner from '../assets/banner.jpeg';
const Hero = () => {
  return (
    <div className="relative bg-blue-600 pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={banner}
          alt="Business people collaborating"
        />
        <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-90" />
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
            estratégica, trabajemos para acompañar a las empresas en su
            crecimiento y desarrollo.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
