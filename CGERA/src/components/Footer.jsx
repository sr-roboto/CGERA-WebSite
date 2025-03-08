import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white">CGERA</span>
            <p className="mt-4 text-gray-300">
              empoderar, colaboración, innovación, sostenibilidad y crecimiento
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LinkedIn size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-300 hover:text-white">
                  Novedades
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  CGERA TV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li>WhatsApp: +5491100000000</li>
              <li>Teléfono: +1 (555) 123-4567</li>
              <li>Dirección: Av. Rivadavia 1115 4º, (1033) CABA. Argentina.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            ©2025 Formosa Software Factory. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
