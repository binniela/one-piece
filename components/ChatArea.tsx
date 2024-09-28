import { User } from 'lucide-react'

const suggestedPrompts = [
  { text: "Explain Medicare Part A coverage and benefits", icon: '🏥' },
  { text: "How do I enroll in Medicare Part B?", icon: '📝' },
  { text: "What's the difference between Medicare and Medicaid?", icon: '🤔' },
  { text: "Find Medicare-approved doctors near me", icon: '👨‍⚕️' },
]

interface ChatAreaProps {
  isLoaded: boolean
  user: { name: string } | null
  onOpenSignIn: () => void
  isDarkMode: boolean
}

export default function ChatArea({ isLoaded, user, onOpenSignIn, isDarkMode }: ChatAreaProps) {
  return (
    <>
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm p-4 flex items-center justify-end`}>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span>{user.name}</span>
              <div className="bg-blue-600 rounded-full p-2">
                <User className="h-5 w-5 text-white" />
              </div>
            </>
          ) : (
            <button onClick={onOpenSignIn} className={`text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}>
              Sign in
            </button>
          )}
        </div>
      </header>

      <main className={`flex-1 overflow-y-auto p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className={`transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-blue-600">Hello</span>
              {user && <span className={isDarkMode ? 'text-white' : 'text-gray-700'}>, {user.name}</span>}
            </h2>
            <p className={`text-3xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>How can I help you today?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestedPrompts.map((prompt, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-6 rounded-3xl shadow-md cursor-pointer transition-colors duration-200`}>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>{prompt.text}</p>
                <span className="text-3xl mt-3 block">{prompt.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}