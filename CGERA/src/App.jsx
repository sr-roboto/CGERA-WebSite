import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import NewSection from './components/NewSection';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUsPage';
import NewsPage from './pages/NewsPage';
import LandingPage from './pages/LandingPage';
import Streaming from './pages/StreamingPage';
import { ChatBotProvider } from './components/chatbot/ChatBotProvider';

function App() {
  return (
    <ChatBotProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/streaming" element={<Streaming />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ChatBotProvider>
  );
}

export default App;
