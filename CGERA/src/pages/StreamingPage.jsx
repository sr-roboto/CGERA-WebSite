import React from 'react';
import ReactPlayer from 'react-player';

function Streaming() {
  return (
    <div className="pt-20 relative">
      <div>
        {/* Hero Section */}
        <div className="relative bg-blue-600">
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/2156675608/video/hispanic-latin-american-couple-software-engineer-developer-use-computer-work-on-program.mp4?s=mp4-640x640-is&k=20&c=CHzdhPE9Y2wEdr0zqltlfhgLpGB9AU1mGnuo0AU91jk="
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-75" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bienvenido a CGRATV
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Manténgase actualizado con las últimas noticias, eventos e
              historias de la comunidad CGERA. Disfruta de nuestro contenido
              exclusivo en CGRATV.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <ReactPlayer
            url="https://www.youtube.com/embed/_wNmXdPKL8Q"
            width="100%"
            height="100vh"
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default Streaming;
