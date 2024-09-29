import { useState } from 'react'
import { Menu, PlusCircle, RefreshCcw, HelpCircle, Settings, LogOut, ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react'

interface SidebarProps {
  onLogout: () => void
  user: { name: string } | null
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export default function Sidebar({ onLogout, user, isDarkMode, toggleDarkMode }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`fixed inset-y-0 left-0 z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900'} transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-16'}`}>
      <div className="flex flex-col h-full">
        <button 
          onClick={toggleSidebar} 
          className={`p-4 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300'} transition-colors duration-200`}
        >
          <Menu className="h-6 w-6" />
        </button>
        
        <div className="flex-grow">
          <button className={`w-full p-4 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300'} transition-colors duration-200`}>
            <PlusCircle className="h-6 w-6 mx-auto" />
            {isExpanded && <span className="mt-2 block text-sm">New Chat</span>}
          </button>
        </div>
        
        <div className="mb-4">
          <button 
            onClick={toggleDarkMode} 
            className={`w-full p-4 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300'} transition-colors duration-200`}
          >
            {isDarkMode ? <Sun className="h-6 w-6 mx-auto" /> : <Moon className="h-6 w-6 mx-auto" />}
            {isExpanded && <span className="mt-2 block text-sm">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>
          <button className={`w-full p-4 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300'} transition-colors duration-200`}>
            <RefreshCcw className="h-6 w-6 mx-auto" />
            {isExpanded && <span className="mt-2 block text-sm">History</span>}
          </button>
          <button className={`w-full p-4 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300'} transition-colors duration-200`}>
            <HelpCircle className="h-6 w-6 mx-auto" />
            {isExpanded && <span className="mt-2 block text-sm">Help</span>}
          </button>
          <button className={`w-full p-4 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300'} transition-colors duration-200`}>
            <Settings className="h-6 w-6 mx-auto" />
            {isExpanded && <span className="mt-2 block text-sm">Settings</span>}
          </button>
          {user && (
            <button 
              onClick={onLogout} 
              className={`w-full p-4 ${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-300'} transition-colors duration-200`}
            >
              <LogOut className="h-6 w-6 mx-auto" />
              {isExpanded && <span className="mt-2 block text-sm">Logout</span>}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
