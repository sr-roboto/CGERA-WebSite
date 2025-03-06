import React, { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Navbar from './components/NavBar';
import Streaming from './pages/StreamingPage';
import AboutUs from './pages/AboutUsPage';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Asegúrate de importar los estilos de AOS

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Duración del efecto de animación
  }, []);

  return (
    <>
      <div className="container min-w-full min-h-[100vh] grid grid-cols-5 grid-rows-[80px_1fr_1fr_1fr] gap-4">
        <Navbar />
        <Streaming />
        <LandingPage />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
