'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, Paperclip, Mic } from 'lucide-react'

interface InputAreaProps {
  query: string
  setQuery: (query: string) => void
  isDarkMode: boolean
  onSendMessage: (message: string) => void
}

export default function InputArea({ query, setQuery, isDarkMode, onSendMessage }: InputAreaProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.trim() !== '') {
      setIsExpanded(true)
    } else {
      setIsExpanded(false)
    }
  }, [query])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSendMessage(query)
      setQuery('')
    }
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-6`}>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto relative">
        <div className={`relative overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'h-16' : 'h-14'}`}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a prompt here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full h-full ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} rounded-full py-4 px-6 pr-24 focus:outline-none text-lg transition-all duration-300 ease-in-out`}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-3">
            <button type="button" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-blue-600'} transition-colors duration-200`} aria-label="Attach file">
              <Paperclip className="h-6 w-6" />
            </button>
            <button type="button" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-blue-600'} transition-colors duration-200`} aria-label="Voice input">
              <Mic className="h-6 w-6" />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'w-10 opacity-100' : 'w-0 opacity-0'}`}>
              <button
                type="submit"
                className={`${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-full p-3 transition-all duration-300 ease-in-out`}
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
