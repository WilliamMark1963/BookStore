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
            {/* text-4xl for mobile  md:text-6xl for tablets lg:text-8xl for desktops */}
            <h1 className="hero-title animate-fade-up animate-delay-1">
                Welcome To <span className="text-amber-400">BookStore</span>
            </h1>
            
            {/* text-lg for mobile, text-2xl for larger screens */}
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



{/* <div className='header'>
        {/* The layer that handles the blur/opacity */}
        // <div className="blur-layer"></div>
        
        {/* The actual text content */}
    //     <div className="content">
    //         <h1 className="text-5xl font-bold mb-2 animate-fade-up animate-delay-1">Welcome To BookStore</h1>
    //         <h2 className='text-2xl animate-fade-up animate-delay-2' >Where you will extend youre boundaries</h2>
    //     </div>
    // </div> 