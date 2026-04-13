import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import BookCard from "./BookCard";

function FindBooks() {
  const { category } = useParams(); // URL: /books/:category
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const allBooks = useSelector((state) => state.books.items);

  // 1. Filter by Category (Dynamic Routing)
  // 2. Filter by Search (Title or Author)
  const filteredBooks = allBooks.filter((book) => {
    const matchesCategory =
      book.category.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-10 bg-slate-950 min-h-screen text-white">
      <div className="flex flex-col md:flex-row gap-5 mb-10">
        {/* Category Selector (Updates URL) */}
        <select
          value={category}
          onChange={(e) => navigate(`/books/${e.target.value}`)}
          className="p-3 rounded bg-slate-800 border border-slate-700"
        >
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title..."
          className="p-3 rounded bg-white text-black flex-1"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display List Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              bookId={book.id}
              // Ensure you pass these props to match your BookCard component
              title={book.title}
              author={book.author}
              description={book.description}
              coverImg={book.coverImage}
              rating={book.rating}
              category={book.category}
            />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-xl italic">
              No books found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FindBooks;
