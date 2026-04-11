import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
useSelector;
import './PopularBooks.css';

function PopularBooks() {
  const data = useSelector((store) => store.books.items);

  return (
    <div className="py-16 px-4 sm:px-10 bg-gradient-to-b from-blue-900 to-blue-700 min-h-screen">
      
      {/* Title Section */}
      <div className="mb-16 text-center animate-title">
        <h3 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight">
          Popular Books
        </h3>
        <div className="h-1.5 w-20 bg-amber-400 mx-auto mt-4 rounded-full shadow-lg"></div>
      </div>

      {/* Responsive Grid Container */}
      {/* grid-cols-1: 1 card per row (Mobile)
          sm:grid-cols-2: 2 cards per row (Tablet)
          lg:grid-cols-3: 3 cards per row (Desktop)
          xl:grid-cols-4: 4 cards per row (Large Screens)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6 justify-items-center max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div 
            key={item.id} 
            className="animate-card w-full flex justify-center" 
            style={{ "--delay": `${index * 120}ms` }}
          >
            <BookCard
              title={item.title}
              author={item.author}
              description={item.description}
              coverImg={item.coverImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularBooks;
