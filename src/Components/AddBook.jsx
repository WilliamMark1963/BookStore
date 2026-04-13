import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../Utilities/bookSlice';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "", author: "", category: "", rating: "", description: "", coverImage: ""
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validation for Category 
    if (formData.category === "") {
      setError("Please select a valid category.");
      return;
    }

    // finalBook
    const finalBookData = {
      ...formData,
      rating: formData.rating || 1,
      coverImage: formData.coverImage.trim() || "https://wallpaperaccess.com/full/1209397.jpg",
      description: formData.description.trim() || "N/A"
    };

    setError("");
    dispatch(addBook(finalBookData));
    
    // Redirect to the new book's category
    navigate(`/books/${formData.category.toLowerCase()}`); 
  };

  return (
    <div className='min-h-screen bg-[#020617] flex items-center justify-center p-6'>
      <div className='w-full max-w-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl'>
        
        <h2 className='text-3xl font-black text-white mb-2 text-center'>Add New <span className="text-blue-400">Book</span></h2>
        <p className='text-slate-400 text-center mb-10'>Fill in the details to expand the library.</p>

        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 p-3 rounded-xl mb-6 text-sm col-span-2 text-center">
              {error}
            </div>
          )}
          
          {/* Title - Mandatory */}
          <div className='md:col-span-2 flex flex-col gap-2'>
            <label className='text-xs font-bold text-blue-400 uppercase tracking-widest ml-1'>Title *</label>
            <input 
              required 
              type="text" 
              placeholder="Min 3 characters"
              className='bg-slate-800 text-white p-3 rounded-xl border border-white/5 outline-none focus:border-blue-500 focus:invalid:border-red-500' 
              minLength={3} 
              onChange={(e) => setFormData({...formData, title: e.target.value})} 
            />
          </div>

          {/* Author - Mandatory */}
          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold text-blue-400 uppercase tracking-widest ml-1'>Author *</label>
            <input 
              required 
              type="text" 
               placeholder="Min 3 characters"
              className='bg-slate-800 text-white p-3 rounded-xl border border-white/5 outline-none focus:border-blue-500 focus:invalid:border-red-500' 
              minLength={3} 
              onChange={(e) => setFormData({...formData, author: e.target.value})} 
            />
          </div>

          {/* Category - Mandatory */}
          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold text-blue-400 uppercase tracking-widest ml-1'>Category *</label>
            <select 
              required
              className='bg-slate-800 text-white p-3 rounded-xl border border-white/5 outline-none focus:border-blue-500'
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="">Select</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>

          {/* Rating - Optional (Defaults to 1) */}
          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold text-blue-400 uppercase tracking-widest ml-1'>Rating (Optional)</label>
            <input 
              type="number" 
              step="0.1" 
              min="1" 
              max="5" 
              placeholder="Default: 1"
              className='bg-slate-800 text-white p-3 rounded-xl border border-white/5 outline-none focus:border-blue-500'
              onChange={(e) => setFormData({...formData, rating: e.target.value})} 
            />
          </div>

          {/* Cover Image - Optional (Defaults to Wallpaper link) */}
          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold text-blue-400 uppercase tracking-widest ml-1'>Cover URL (Optional)</label>
            <input 
              type="url" 
              placeholder="Paste image link"
              className='bg-slate-800 text-white p-3 rounded-xl border border-white/5 outline-none focus:border-blue-500'
              onChange={(e) => setFormData({...formData, coverImage: e.target.value})} 
            />
          </div>

          {/* Description - Optional (Defaults to N/A) */}
          <div className='md:col-span-2 flex flex-col gap-2'>
            <label className='text-xs font-bold text-blue-400 uppercase tracking-widest ml-1'>Description (Optional)</label>
            <textarea 
              className='bg-slate-800 text-white p-3 rounded-xl border border-white/5 outline-none focus:border-blue-500 min-h-[80px]'
              onChange={(e) => setFormData({...formData, description: e.target.value})} 
            />
          </div>

          <div className='md:col-span-2 flex gap-4 mt-6'>
            <button type="submit" className='flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-900/20'>
              Add Book
            </button>
            <button type="reset" onClick={() => setError("")} className='px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all'>
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddBook;