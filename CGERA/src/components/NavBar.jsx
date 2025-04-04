import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo2.png';
import Login from '../pages/LoginPage';
import useAuth from '../context/UseAuth';

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Quienes Somos', href: '/about' },
    { name: 'Novedades', href: '/news' },
    { name: 'Networking', href: 'https://networking-cgera.netlify.app/' },
    { name: 'CGERA TV', href: '/streaming' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img className="block h-12 w-auto" src={logo} alt="Workflow" />
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Cerrar Sesión
              </button>
            ) : (
              <button
                onClick={() => setModalIsOpen(true)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Iniciar Sesión
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {isAuthenticated ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  logout();
                }}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Cerrar Sesión
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(false);
                  setModalIsOpen(true);
                }}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Iniciar Sesión
              </button>
            )}
          </div>
        </div>
      )}

      <Login modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </nav>
  );
};

export default NavBar;
