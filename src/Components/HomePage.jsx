import React from 'react'
import Hero from './Hero'
import PopularBooks from './PopularBooks'
import HeaderBooksList from './HeaderBooksList'

function HomePage() {
  return (
    <div>
      <Hero/>
      <div className='bg-[#0f172a]'>
       <PopularBooks/>
        <HeaderBooksList category="Fiction"/>
        <HeaderBooksList category="Non-Fiction"/>
      </div>
      
    </div>
  )
}

export default HomePage
