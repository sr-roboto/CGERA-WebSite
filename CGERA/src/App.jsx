import React from 'react';
import {
  Menu,
  X,
  Youtube,
  Users,
  Newspaper,
  Info,
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
} from 'lucide-react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import NewsSection from './components/NewSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
