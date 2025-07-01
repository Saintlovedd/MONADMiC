import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal = ({
  isOpen,
  onClose
}: LoginModalProps) => {
  const {
    isDarkMode
  } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    alert(`${isSignUp ? 'Sign up' : 'Login'} attempted with email: ${email}`);
    onClose();
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      {/* Modal */}
      <div className={`relative w-full max-w-md p-6 rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        {/* Close button */}
        <button onClick={onClose} className={`absolute top-4 right-4 p-1 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
          <XIcon className="h-5 w-5" />
        </button>
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <img src="/20250701_182638.jpg" alt="Monadmic logo" className="h-12 w-12 mr-2" />
          <h2 className="text-2xl font-bold">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
        </div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
              Email
            </label>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' : 'border-gray-300 focus:border-purple-500'} focus:outline-none focus:ring-1 focus:ring-purple-500`} />
          </div>
          <div>
            <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
              Password
            </label>
            <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' : 'border-gray-300 focus:border-purple-500'} focus:outline-none focus:ring-1 focus:ring-purple-500`} />
          </div>
          {isSignUp && <div>
              <label htmlFor="confirmPassword" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-1`}>
                Confirm Password
              </label>
              <input id="confirmPassword" type="password" required className={`w-full px-3 py-2 border rounded-md ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:border-purple-500' : 'border-gray-300 focus:border-purple-500'} focus:outline-none focus:ring-1 focus:ring-purple-500`} />
            </div>}
          <div className="pt-2">
            <button type="submit" className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </div>
        </form>
        {/* Toggle between login and signup */}
        <div className="mt-4 text-center">
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-sm text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300">
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </button>
        </div>
        {/* Social login options */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}`}>
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <button type="button" className={`py-2 px-4 border rounded-md flex justify-center items-center ${isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`}>
              <span className="sr-only">Sign in with Google</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
              </svg>
            </button>
            <button type="button" className={`py-2 px-4 border rounded-md flex justify-center items-center ${isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`}>
              <span className="sr-only">Sign in with Twitter</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </button>
            <button type="button" className={`py-2 px-4 border rounded-md flex justify-center items-center ${isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`}>
              <span className="sr-only">Sign in with GitHub</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>;
};