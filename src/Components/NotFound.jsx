import React from 'react'
import { Link,useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-white p-6 text-center">
      {/* Visual 404 styling */}
      <h1 className="text-9xl font-black text-blue-500 opacity-20 absolute select-none">404</h1>
      
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        
        {/* Requirement: Display the invalid route URL */}
        <p className="text-slate-400 mb-8 bg-slate-900 px-4 py-2 rounded-lg border border-white/10 font-mono">
          Path: <span className="text-red-400">{location.pathname}</span> does not exist.
        </p>

        <p className="text-slate-300 mb-10 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Requirement: Link back to the Home page */}
        <Link 
          to="/" 
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-900/40"
        >
          Back to Home
        </Link>
      </div>
    </div>
    )
}

export default NotFound
