import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getfoods } from '../../../api/food.services';
import { add } from '../../../redux/features/cartSlice';

const Foods = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["foods"],
    queryFn: getfoods,
  });

  const navigate = useNavigate();

  // State for search, category filters, and active alerts
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [alerts, setAlerts] = useState([]);

  const categories = ["All", "Hot & Spicy", "Tandoori", "Desserts", "Non-Veg", "Veg Items", "Dinner Menu", "Drinks"];

  // Handler to add food to cart and trigger custom popup alert
  const handleAddToCart = (food) => {
    dispatch(add(food));
    
    // Create a unique id for the toast alert instance
    const id = Date.now();
    const newAlert = { id, name: food.name };
    
    setAlerts((prev) => [...prev, newAlert]);
    
    // Automatically clear individual alert bubble after 3 seconds
    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, 3000);
  };

  // Loading State with Spinner Animation
  if (isPending) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-yellow-50 to-blue-100">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute h-full w-full animate-spin rounded-full border-4 border-white border-t-blue-600 shadow-sm"></div>
          <div className="h-6 w-6 animate-pulse rounded-full bg-blue-200"></div>
        </div>
        <span className="ml-3 mt-4 text-sm font-semibold tracking-wide text-blue-700 animate-pulse">Loading sweet catalog...</span>
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="mx-auto my-12 max-w-md rounded-2xl border border-red-200 bg-white/90 backdrop-blur-sm p-6 text-center shadow-xl shadow-blue-500/10">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        </div>
        <p className="font-bold text-gray-800">Something went wrong!</p>
        <p className="text-sm text-red-500 mt-1">{error.message}</p>
      </div>
    );
  }

  // Filter foods based on search and selected category
  const filteredfoods = data?.foods?.filter((food) => {
    const dbCategory = food.category ? food.category.trim().toLowerCase() : "";
    const selectedCategory = activeCategory.trim().toLowerCase();
    const matchesCategory = activeCategory === "All" || dbCategory === selectedCategory;
    const matchesSearch = food.name 
      ? food.name.toLowerCase().includes(searchQuery.toLowerCase()) 
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-tr pb-16 antialiased selection:bg-blue-200">
      
      {/* Floating Popup Alerts Stack Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full px-4 sm:px-0">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center gap-3 bg-slate-900/95 text-white backdrop-blur-md px-4 py-3.5 rounded-xl shadow-2xl border border-white/10 animate-fade-in-up transform transition-all duration-300"
          >
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold tracking-wider text-blue-400 uppercase">Added to Cart!</p>
              <p className="text-xs text-slate-200 line-clamp-1 font-medium mt-0.5">{alert.name}</p>
            </div>
            <button 
              onClick={() => setAlerts((prev) => prev.filter((a) => a.id !== alert.id))}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Header Banner Section */}
      <div className="flex flex-col items-start justify-center pt-12 pb-8 text-center px-8">
        <h1 className="text-4xl sm:text-5xl font-serif font-black text-gray-900 tracking-tight mb-2">
          Our Menus
        </h1>
        <div className="flex items-center gap-1.5 bg-blue-600/10 px-3 py-1 rounded-full border border-blue-600/20">
          <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">
            Fresh ingredients, bold flavors, and unforgettable taste—find your favorite dish today.
          </span>
        </div>
      </div>

      {/* Controls Container: Categories, Search & Filter */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Categories Dynamic Pill Tabs */}
        <div className="flex flex-wrap gap-2.5 items-center justify-center lg:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 border transform active:scale-95 ${
                activeCategory === category
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/30 -translate-y-0.5"
                  : "bg-white/80 backdrop-blur-xs text-gray-700 border-blue-200/40 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md hover:shadow-blue-600/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input Controls */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-center">
          <div className="relative flex-1 sm:max-w-xs md:max-w-md lg:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search Food...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-blue-200/60 bg-white/90 backdrop-blur-xs py-2.5 pl-10 pr-4 text-xs font-semibold text-gray-800 outline-none placeholder-gray-400 shadow-inner focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic food Count Display */}
        <div className="mb-6 flex justify-between items-center bg-white/40 backdrop-blur-xs border border-blue-200/30 rounded-xl px-4 py-2">
          <p className="text-xs font-bold tracking-wider uppercase text-blue-700">
            Collections Foods
          </p>
          <p className="text-xs font-medium text-gray-600">
             <span className="font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md">{filteredfoods?.length || 0}</span> Food items
          </p>
        </div>

        {/* food Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredfoods?.map((food) => (
            <div 
              key={food._id || food.id} 
              className="flex flex-col p-4 bg-white group rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
            >
              {/* Card Image Container */}
              <div className="w-full h-44 rounded-xl overflow-hidden bg-slate-100 mb-4 relative">
                <img 
                  src={food.photo} 
                  alt={food.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Category & Ratings Wrapper */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {food.category || "Premium"}
                </span>
                
                <div className="flex items-center gap-1 text-xs bg-amber-50/60 px-2 py-0.5 rounded-full border border-amber-100/30">
                  <span className="text-amber-500 font-medium">★</span>
                  <span className="font-bold text-amber-900">
                    {food.ratings !== undefined ? food.ratings.toFixed(1) : "4.0"}
                  </span>
                  <span className="text-[10px] text-amber-700/60">
                    ({food.reviewsCount ?? 0})
                  </span>
                </div>
              </div>

              {/* Title & Badge */}
              <div className="flex-1 min-w-0">
                <h2 
                  onClick={() => navigate(`/food/${food._id}`, { state: food })}
                  className="text-lg font-bold text-gray-900 truncate cursor-pointer group-hover:text-blue-600 transition-all duration-300 ease-out"
                >
                  {food.name}
                </h2> 
                
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50/60 px-2 py-0.5 rounded-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Freshly Prepared
                  </span>
                </div>
              </div>

              {/* Order Now Full-Width Button Container */}
              <div className="mt-5 w-full flex justify-end">
                <button
                  className="w-auto px-6 flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/10 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] transition-all duration-200 cursor-pointer"
                  onClick={() => handleAddToCart(food)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Foods;