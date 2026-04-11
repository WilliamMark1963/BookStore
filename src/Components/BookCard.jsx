import React from "react";

function BookCard({ title, author, description, coverImg }) {
  return (
   <div className="w-full max-w-[320px] h-[420px] rounded-2xl border border-white/10 flex flex-col overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-md transition-transform hover:-translate-y-2">
      
      {/* Image Container  */}
      <div className="h-48 shrink-0 relative">
        <img
          src={coverImg}
          alt={title}
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-5 text-slate-100">
        <h2 className="text-xl font-bold leading-tight line-clamp-1 text-white">
          {title}
        </h2>
        <p className="text-sm font-medium text-blue-400 mt-1">{author}</p>
        
        <div className="h-[1px] w-12 bg-blue-500 my-3" />

        <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 italic">
          "{description}"
        </p>

        {/* mt-auto pushes the button to the bottom so all buttons align */}
        <button className="mt-auto py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}

export default BookCard;
