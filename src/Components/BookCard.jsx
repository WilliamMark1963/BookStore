import React from "react";
import { useNavigate } from "react-router-dom";

function BookCard({  bookId, title, author, description, coverImg, rating, category }) {
const navigate = useNavigate();
  function handleClick(){
    console.log("Navigating...");
    navigate(`/book/${bookId}`);
  }
  return (
   <div className="w-full max-w-[320px] h-[440px] rounded-2xl border border-white/10 flex flex-col overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 group">
      
      {/* Image Container */}
      <div className="h-48 shrink-0 relative overflow-hidden">
        <img
          src={coverImg}
          alt={title}
          className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Floating Rating (Top Right) */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/20 flex items-center gap-1 shadow-xl z-10">
          <span className="text-amber-400 text-sm">★</span>
          <span className="text-white text-xs font-bold">{rating}</span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-5 text-slate-100">
        
        {/* Category Tag (Top Left of content) */}
        <span className="w-fit px-2 py-0.5 mb-2 text-[10px] uppercase tracking-widest font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-md">
          {category}
        </span>

        <h2 className="text-xl font-bold leading-tight line-clamp-1 text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h2>
        <p className="text-sm font-medium text-blue-400 mt-1">{author}</p>
        
        <div className="h-[1px] w-12 bg-blue-500 my-3" />

        <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 italic">
          "{description}"
        </p>

        <button className="mt-auto py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-all active:scale-95 shadow-lg shadow-blue-900/40" onClick={handleClick}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default BookCard;
