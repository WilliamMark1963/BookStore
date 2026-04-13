import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  function createBook(){

    navigate("/addbook")
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
<nav className='sticky top-0 z-50 w-full px-6 py-4 lg:py-6 bg-slate-900/80 backdrop-blur-md border-b border-white/10 text-white'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        
        {/* Logo - Increased size for desktop */}
        <Link to="/" className='text-2xl lg:text-4xl font-black tracking-tighter hover:text-blue-400 transition-all duration-300'>
          BOOK<span className='text-blue-500'>STORE</span>
        </Link>

        {/* Desktop Navigation - Increased spacing and font size */}
        <div className='hidden md:flex items-center space-x-10 lg:space-x-16'>
          <ul className='flex space-x-8 lg:space-x-12 text-base lg:text-xl font-semibold'>
            <li className='hover:text-blue-400 transition-colors cursor-pointer'><Link to="/">Home</Link></li>
            <li className='hover:text-blue-400 transition-colors cursor-pointer'><Link to="/books/fiction">Browse</Link></li>
            <li className='hover:text-blue-400 transition-colors cursor-pointer'><Link to="/about">About</Link></li>
          </ul>
          
          {/* Bigger Action Button */}
          <button className='bg-blue-600 hover:bg-blue-500 px-6 py-2.5 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base font-bold transition-all shadow-lg hover:shadow-blue-500/20' onClick = {createBook}>
            Add Book
          </button>
        </div>

        {/* Mobile Menu Button (unchanged) */}
        <button className='md:hidden text-3xl' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 space-y-4 animate-in fade-in slide-in-from-top-5'>
          <ul className='flex flex-col space-y-4 font-medium'>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/browse" onClick={() => setIsOpen(false)}>Browse</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          </ul>
          <button className='w-full bg-blue-600 py-3 rounded-xl font-bold' onClick={createBook}>Sign In</button>
        </div>
      )}
    </nav>
  )
}

export default Header
