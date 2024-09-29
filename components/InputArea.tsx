'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, Paperclip, Mic } from 'lucide-react'

interface InputAreaProps {
  query: string
  setQuery: (query: string) => void
  isDarkMode: boolean
}

export default function InputArea({ query, setQuery, isDarkMode }: InputAreaProps) {
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
    // Handle submit logic here
    setQuery('')
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg p-4`}>
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto relative">
        <div className="relative flex items-center">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a prompt here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`w-full ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} rounded-full py-3 px-6 pr-24 focus:outline-none text-lg transition-all duration-300 ease-in-out`}
          />
          <div className="absolute right-2 flex items-center space-x-2">
            <button type="button" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-blue-600'} transition-colors duration-200 p-2`} aria-label="Attach file">
              <Paperclip className="h-5 w-5" />
            </button>
            <button type="button" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-blue-600'} transition-colors duration-200 p-2`} aria-label="Voice input">
              <Mic className="h-5 w-5" />
            </button>
            <button
              type="submit"
              className={`${isExpanded ? 'opacity-100 w-10' : 'opacity-0 w-0'} ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-full p-2 transition-all duration-300 ease-in-out overflow-hidden`}
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
