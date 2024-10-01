// ChatInterface.tsx
'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import InputArea from './InputArea';
import SSOPopup from './SSOPopup';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
}

export default function ChatInterface() {
  const [query, setQuery] = useState('');
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLogin = (userData: { name: string }) => {
    setUser(userData);
    setIsSignInOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const sendMessage = async (content: string) => {
    const userMessage: Message = { id: Date.now().toString(), content, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const aiMessage: Message = { id: Date.now().toString(), content: data.response, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Sidebar 
        onLogout={handleLogout} 
        user={user}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden ml-16">
        {isLoaded && (
          <>
            <ChatArea 
              user={user} 
              onOpenSignIn={() => setIsSignInOpen(true)}
              isDarkMode={isDarkMode}
              messages={messages}
              isLoading={isLoading}
              isLoaded={isLoaded}
            />
            <InputArea 
              query={query} 
              setQuery={setQuery} 
              isDarkMode={isDarkMode} 
              onSendMessage={sendMessage}
            />
          </>
        )}
      </div>

      <SSOPopup isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} mode="signin" onLogin={handleLogin} isDarkMode={isDarkMode} />
    </div>
  );
}
