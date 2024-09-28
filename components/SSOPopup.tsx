import React from 'react'
import { X } from 'lucide-react'

interface SSOPopupProps {
  isOpen: boolean
  onClose: () => void
  mode: 'signin' | 'signup'
  onLogin: (userData: { name: string }) => void
  isDarkMode: boolean
}

const SSOPopup: React.FC<SSOPopupProps> = ({ isOpen, onClose, mode, onLogin, isDarkMode }) => {
  if (!isOpen) return null

  const title = mode === 'signin' ? 'Welcome back.' : 'Create your account'
  const alternateActionText = mode === 'signin' ? "No account?" : "Already have an account?"
  const alternateActionLink = mode === 'signin' ? "Create one" : "Sign in"
  const buttonText = mode === 'signin' ? "Sign in" : "Sign up"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate login/signup process
    onLogin({ name: 'User' }) // Replace with actual user data
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-3xl p-8 max-w-md w-full relative shadow-lg`}>
        <button 
          onClick={onClose} 
          className={`absolute top-4 right-4 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
        <div className="space-y-4">
          {/* SSO buttons here (unchanged) */}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Your form inputs go here */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">{buttonText}</button>
        </form>
        <p className="text-center mt-6 text-sm">
          <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{alternateActionText}</span>{' '}
          <a href="#" className="text-blue-600 hover:underline" onClick={() => onLogin({ name: 'New User' })}>{alternateActionLink}</a>
        </p>
        <p className="text-center mt-4 text-sm">
          <a href="#" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:underline`}>Forgot email or trouble signing in? Get help.</a>
        </p>
        <p className={`text-center text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-8`}>
          Click &quot;{buttonText}&quot; to agree to Auxilium&apos;s Terms of Service and acknowledge that Auxilium&apos;s Privacy Policy applies to you.
        </p>
      </div>
    </div>
  )
}

export default SSOPopup
