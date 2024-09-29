import { User, Clipboard, HelpCircle, Search, FileText } from 'lucide-react'

const suggestedPrompts = [
  { text: "Explain Medicare Part A coverage and benefits", icon: <FileText className="h-6 w-6" /> },
  { text: "How do I enroll in Medicare Part B?", icon: <Clipboard className="h-6 w-6" /> },
  { text: "What's the difference between Medicare and Medicaid?", icon: <HelpCircle className="h-6 w-6" /> },
  { text: "Find Medicare-approved doctors near me", icon: <Search className="h-6 w-6" /> },
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
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm p-6 flex items-center justify-between`}>
        <h1 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Auxilium.</h1>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{user.name}</span>
              <div className="bg-blue-600 rounded-full p-2">
                <User className="h-5 w-5 text-white" />
              </div>
            </>
          ) : (
            <button 
              onClick={onOpenSignIn} 
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
            >
              Sign in
            </button>
          )}
        </div>
      </header>

      <main className={`flex-1 overflow-y-auto p-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className={`transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <h2 className="text-6xl font-bold mb-6">
              <span className="text-blue-600">Hello</span>
              {user && <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>, {user.name}</span>}
            </h2>
            <p className={`text-4xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} font-light`}>How can I help you today?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestedPrompts.map((prompt, index) => (
              <button 
                key={index} 
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} p-6 rounded-xl shadow-md cursor-pointer transition-all duration-200 hover:shadow-lg flex items-center space-x-4`}
              >
                <div className="text-blue-600">{prompt.icon}</div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg font-medium`}>{prompt.text}</p>
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
