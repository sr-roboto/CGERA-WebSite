import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { useChatbot } from './ChatBotProvider';

export function ChatbotUI() {
  const { isOpen, toggleChatbot } = useChatbot();
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content:
        '¡Hola! Soy el asistente virtual de CGERA. ¿En qué puedo ayudarte hoy?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { role: 'user', content: input }]);

    // Clear input
    setInput('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        'Gracias por tu consulta. Puedo ayudarte con información sobre programas de financiamiento, eventos, capacitaciones y más.',
        'CGERA ofrece diversos servicios para PYMEs. ¿Te gustaría conocer más sobre alguno en particular?',
        'Para obtener información más detallada, te recomiendo contactar directamente con nuestro equipo a través del formulario de contacto.',
        'Puedes encontrar más recursos en la sección de Networking y CGERA TV de nuestro sitio web.',
      ];

      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];

      setMessages((prev) => [
        ...prev,
        { role: 'bot', content: randomResponse },
      ]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Chatbot Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <button
              onClick={toggleChatbot}
              className="rounded-full h-12 w-12 shadow-lg bg-blue-600 text-white flex items-center justify-center"
            >
              <MessageSquare className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              height: isMinimized ? 'auto' : '400px',
              width: isMinimized ? '250px' : '320px',
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl overflow-hidden z-50 flex flex-col max-w-full max-h-full"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <h3 className="font-medium">Asistente CGERA</h3>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={toggleMinimize}
                  className="h-8 w-8 text-white hover:bg-blue-500 flex items-center justify-center"
                >
                  {isMinimized ? (
                    <Maximize2 size={16} />
                  ) : (
                    <Minimize2 size={16} />
                  )}
                </button>
                <button
                  onClick={toggleChatbot}
                  className="h-8 w-8 text-white hover:bg-blue-500 flex items-center justify-center"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <div className="flex-1 p-3 overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-3 flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-2 ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Input */}
            {!isMinimized && (
              <div className="border-t p-3">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 border rounded-lg p-2"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-blue-600 text-white rounded-lg p-2 flex items-center justify-center"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
