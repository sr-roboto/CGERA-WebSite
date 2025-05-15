import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import NewSection from './components/NewSection';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';
import NewsPage from './pages/NewsPage';
import LandingPage from './pages/LandingPage';
import Streaming from './pages/StreamingPage';
import LoginPage from './pages/LoginPage';
import { ChatBotProvider } from './components/chatbot/ChatBotProvider';
import { AuthProvider } from './context/AuthContext';
import CoursePage from './pages/CoursePage';

function App() {
  useEffect(() => {
    window.location.replace('https://cgera.net.ar');
  }, []);
  return <></>;
}

export default App;
