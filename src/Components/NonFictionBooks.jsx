import React from 'react'
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import "./PopularBooks.css"

function NonFictionBooks() {
    const data = useSelector((store) => store.books.items);
    const nonFictionList = data
        .filter(item => item.category === "Non-Fiction")
        .slice(0, 5);
  return (
     <>
     </>
  )
}

export default NonFictionBooks
