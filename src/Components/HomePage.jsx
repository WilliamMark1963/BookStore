import React from 'react'
import Hero from './Hero'
import BookCard from './BookCard'
import PopularBooks from './PopularBooks'
import FictionBooks from './FictionBooks'
import NonFictionBooks from './NonFictionBooks'
import BookDetail from './BookDetail'

function HomePage() {
  return (
    <div>
      <Hero/>
      <div className='bg-[#0f172a]'>
       <PopularBooks/>
      <FictionBooks/>
      <NonFictionBooks/>
      </div>
      
    </div>
  )
}

export default HomePage
