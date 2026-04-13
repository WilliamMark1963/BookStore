import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function BookDetail() {
    const navigate = useNavigate()
        const { id } = useParams();
        const books = useSelector((store) => store.books?.items || []);
        const book = books.find((item) => item.id === Number(id));

        if (!book) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl font-bold mb-4">Book Not Found</h2>
                <button onClick={() => navigate('/')} className="text-blue-400 underline">Return Home</button>
            </div>
        );
    }

 
  return (
   <div className='min-h-screen bg-slate-950 flex items-center justify-center p-4 md:p-10 relative overflow-hidden'>
            
            {/* Dynamic Background Blur */}
            <div className="absolute inset-0 z-0">
                <img src={book.coverImage} className="w-full h-full object-cover opacity-20 blur-3xl scale-110" alt="" />
            </div>

            <div className='relative z-10 w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row'>
                
                {/* Left Side: Image Section */}
                <div className='md:w-2/5 p-8 bg-black/20 flex items-center justify-center'>
                    <img 
                        src={book.coverImage} 
                        alt={book.title} 
                        className="w-full max-w-[300px] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500" 
                    />
                </div>

                {/* Right Side: Info Section */}
                <div className='md:w-3/5 p-8 md:p-12 flex flex-col justify-center'>
                    <div className='flex items-center gap-3 mb-4'>
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-500/30">
                            {book.category}
                        </span>
                        <div className='flex items-center gap-1 bg-amber-400/10 px-2 py-1 rounded-lg border border-amber-400/20'>
                            <span className="text-amber-400 text-sm">★</span>
                            <span className="text-amber-400 text-sm font-bold">{book.rating}</span>
                        </div>
                    </div>

                    <h1 className='text-4xl md:text-6xl font-black text-white mb-2 leading-tight'>
                        {book.title}
                    </h1>
                    <p className='text-xl text-blue-400 font-medium mb-6'>by {book.author}</p>
                    
                    <div className='h-1 w-20 bg-amber-400 rounded-full mb-8 shadow-[0_0_15px_rgba(251,191,36,0.4)]'></div>
                    
                    <p className='text-slate-300 text-lg leading-relaxed mb-10 italic border-l-4 border-slate-700 pl-6'>
                        "{book.description}"
                    </p>

                    <div className='flex flex-wrap gap-4'>
                        <button className='bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg active:scale-95'>
                            Add to Library
                        </button>
                        <button 
                            onClick={() => navigate(-1)}
                            className='bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl transition-all border border-white/10'
                        >
                            Back to Browse
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BookDetail
