'use client'

import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import InputArea from './InputArea'
import SSOPopup from './SSOPopup'

export default function ChatInterface() {
  const [query, setQuery] = useState('')
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [user, setUser] = useState<{ name: string } | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleLogin = (userData: { name: string }) => {
    setUser(userData)
    setIsSignInOpen(false)
  }

  const handleLogout = () => {
    setUser(null)
  }

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Sidebar 
        onLogout={handleLogout} 
        user={user}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden ml-16">
        <ChatArea 
          isLoaded={isLoaded} 
          user={user} 
          onOpenSignIn={() => setIsSignInOpen(true)}
          isDarkMode={isDarkMode}
        />
        <InputArea query={query} setQuery={setQuery} isDarkMode={isDarkMode} />
      </div>

      <SSOPopup isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} mode="signin" onLogin={handleLogin} isDarkMode={isDarkMode} />
    </div>
  )
}
