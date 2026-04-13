import React from 'react'

import './Hero.css'
import { useNavigate } from 'react-router-dom'

function Hero() {
    const navigate = useNavigate();
    function explore(){
        navigate("/books/non-fiction")
    }
  return (
    <div className='header'>
        <div className="blur-layer"></div>
        
        <div className="content">
            
            <h1 className="hero-title animate-fade-up animate-delay-1">
                Welcome To <span className="text-amber-400">BookStore</span>
            </h1>
            
    
            <h2 className='hero-subtitle animate-fade-up animate-delay-2'>
                Where you will extend your boundaries
            </h2>
            
            <div className="animate-fade-up animate-delay-3 mt-6 md:mt-10">
                <button className="bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold py-3 px-6 md:px-10 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 text-sm md:text-base" onClick={explore}>
                    Explore Collection
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero
