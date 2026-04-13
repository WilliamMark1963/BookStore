import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import "./PopularBooks.css"
import { useNavigate } from 'react-router-dom';

function HeaderBooksList({category}) {
    const data = useSelector((store) => store.books.items);
const bookList = data
        .filter(item => item.category == category)
        .slice(0, 5);
        const navigate= useNavigate()

        function goToFictions(){
            navigate("/books/non-fiction")
        }
        function goToNonFictions(){
                navigate("/books/non-fiction")
        }
        
        if(category=="Fiction")
          return(
            <section className="py-20 px-6  relative overflow-hidden">
            {/* Background Accent Blur */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Captivating <span className="text-indigo-400">Fiction</span>
                        </h2>
                        <p className="text-slate-400 mt-2 text-lg">
                            Lose yourself in stories that defy reality.
                        </p>
                    </div>
                    <button className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors flex items-center gap-2 group" onClick={goToFictions}>
                        View All Fiction 
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                {/* Horizontal Scroll or Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {bookList.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="animate-card" 
                            style={{ "--delay": `${index * 100}ms` }}
                        >
                            <BookCard
                                bookId ={item.id}
                                title={item.title}
                                author={item.author}
                                description={item.description}
                                coverImg={item.coverImage}
                                rating={item.rating}
                                category={item.category}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
        )      
  return (
       <section className="py-20 px-6 relative overflow-hidden">
            {/* Background Accent Blur */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                        Real <span className="text-emerald-400">Knowledge</span>
                    </h2>
                       <p className="text-slate-400 mt-1 text-sm">
                        Expand your mind with true stories and facts.
                    </p>
                    </div>
                    <button className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors flex items-center gap-2 group" onClick={goToNonFictions}>
                        View All Non-Fiction 
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

                {/* Horizontal Scroll or Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {bookList.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="animate-card" 
                            style={{ "--delay": `${index * 100}ms` }}
                        >
                            <BookCard
                                 bookId ={item.id}
                                title={item.title}
                                author={item.author}
                                description={item.description}
                                coverImg={item.coverImage}
                                rating={item.rating}
                                category={item.category}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default HeaderBooksList;
