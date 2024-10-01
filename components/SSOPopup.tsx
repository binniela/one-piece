import Image from 'next/image';
import { X } from 'lucide-react';

interface SSOPopupProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'signin' | 'signup';
  onLogin: (userData: { name: string }) => void;
  isDarkMode: boolean;
}

export default function SSOPopup({ isOpen, onClose, mode, onLogin, isDarkMode }: SSOPopupProps) {
  if (!isOpen) return null;

  const handleLogin = (provider: string) => {
    // Simulating login with provider
    console.log(`Logging in with ${provider}`);  // Use provider variable here
    onLogin({ name: 'John Doe' });
    onClose();
  };

  const buttonStyles = `w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-100 transition duration-300`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} p-8 rounded-lg shadow-xl max-w-md w-full`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{mode === 'signin' ? 'Sign In' : 'Sign Up'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          <button onClick={() => handleLogin('Google')} className={buttonStyles} aria-label="Sign in with Google">
            <Image src="/google-icon.png" alt="Google" width={24} height={24} />
            <span>Sign in with Google</span>
          </button>
          
          <button onClick={() => handleLogin('Facebook')} className={buttonStyles} aria-label="Sign in with Facebook">
            <Image src="/facebook-icon.png" alt="Facebook" width={24} height={24} />
            <span>Sign in with Facebook</span>
          </button>
          
          <button onClick={() => handleLogin('Apple')} className={buttonStyles} aria-label="Sign in with Apple">
            <Image src="/apple-icon.png" alt="Apple" width={24} height={24} />
            <span>Sign in with Apple</span>
          </button>
          
          <button onClick={() => handleLogin('X')} className={buttonStyles} aria-label="Sign in with X">
            <Image src="/x-icon.png" alt="X" width={24} height={24} />
            <span>Sign in with X</span>
          </button>
          
          <button onClick={() => handleLogin('Email')} className={buttonStyles} aria-label="Sign in with email">
            <span className="material-icons">email</span>
            <span>Sign in with email</span>
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {mode === 'signin' ? "No account?" : "Already have an account?"}
            <button onClick={() => {}} className="ml-1 text-blue-600 hover:underline">
              {mode === 'signin' ? "Create one" : "Sign in"}
            </button>
          </p>
        </div>
        
        <div className="mt-4 text-center">
          <button onClick={() => {}} className="text-sm text-gray-600 hover:underline">
            Forgot email or trouble signing in? Get help.
          </button>
        </div>
      </div>
    </div>
  );
}
