import { createContext, useState, useContext } from 'react';
import { ChatbotUI } from './ChatBotUI';

const ChatBotContext = createContext({
  isOpen: false,
  toggleChatbot: () => {},
});

export const useChatbot = () => useContext(ChatBotContext);

export function ChatBotProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ChatBotContext.Provider value={{ isOpen, toggleChatbot }}>
      {children}
      <ChatbotUI />
    </ChatBotContext.Provider>
  );
}
