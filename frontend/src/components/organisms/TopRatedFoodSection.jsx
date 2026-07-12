import React, { useState } from 'react';

const TopRatedFoodsSection = () => {
  const [favorites, setFavorites] = useState({});

  const TOP_FOODS = [
    { id: 'f1', name: 'Smoked Garlic Butter Ribeye', rating: '4.9', reviews: 184, price: 'RS.700', tag: 'Chef Choice', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },
    { id: 'f2', name: 'Crispy Tandoori Platter', rating: '4.8', reviews: 242, price: 'RS.600', tag: 'Best Seller',image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500' },
    { id: 'f3', name: 'Artisan Truffle Pizza', rating: '4.8', reviews: 156, price: 'RS.900', tag: 'Trending',  image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500' },
    { id: 'f4', name: 'Matcha Lava Fondant', rating: '4.7', reviews: 98, price: 'RS.450', tag: 'Top Dessert',  image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500' }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="mx-auto px-4 py-12 sm:px-6 lg:px-8 font-sans bg-white rounded-3xl border border-slate-200 space-y-12 shadow-xs">
      
      {/* Structural Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-100 pb-6 gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Performance Metrics</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Highest Rated Dishes</h2>
          <p className="text-xs text-slate-500">Continuous analysis of menu rankings based on client point-of-sale feedback</p>
        </div>
      
      </div>

      {/* Unique Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-16 gap-x-6 pt-6">
        {TOP_FOODS.map((food) => (
          <div 
            key={food.id}
            className="group relative bg-slate-50/60 border border-slate-200/80 rounded-2xl pt-14 pb-4 px-4 hover:bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
          >
            
            {/* Top Overflowing Circular Image Disk */}
            <div className="absolute -top-12 left-4 w-24 h-24 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-md group-hover:border-blue-500 group-hover:scale-105 transition-all duration-300">
              <img 
                src={food.image} 
                alt={food.name} 
                className="w-full h-full object-cover group-hover:rotate-3 transition-transform duration-500"
              />
            </div>

            {/* Favorite Action Node floated to right mirror position */}
            <button 
              onClick={() => toggleFavorite(food.id)}
              className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center cursor-pointer shadow-2xs active:scale-90 transition-all text-xs hover:border-slate-300"
            >
              <span className={favorites[food.id] ? "scale-110" : "opacity-60"}>
                {favorites[food.id] ? '❤️' : '🤍'}
              </span>
            </button>

            {/* Core Informational Profile Block */}
            <div className="space-y-4">
              <div>
                <span className="text-[9px] font-mono text-slate-400 block tracking-wider uppercase">{food.code}</span>
                <h3 className="font-extrabold text-slate-900 text-sm tracking-tight mt-0.5 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {food.name}
                </h3>
              </div>

              {/* Data Specifications Grid */}
              <div className="grid grid-cols-2 gap-2 bg-white border border-slate-200/60 p-2.5 rounded-xl text-[11px] font-bold">
                
                {/* Score Field */}
                <div className="border-r border-slate-100 pr-1">
                  <span className="text-[9px] text-slate-400 block uppercase font-medium">Rating</span>
                  <div className="flex items-center text-emerald-600 space-x-0.5 mt-0.5">
                    <span>★</span>
                    <span>{food.rating}</span>
                  </div>
                </div>

                {/* Scope Field */}
                <div className="pl-1">
                  <span className="text-[9px] text-slate-400 block uppercase font-medium">Reviews</span>
                  <span className="text-slate-700 block mt-0.5 font-semibold">{food.reviews} orders</span>
                </div>

              </div>
            </div>

            {/* Transactional Action Footer */}
            <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Unit Cost</span>
                <span className="text-base font-black text-slate-900 tracking-tight leading-none mt-0.5">
                  {food.price}
                </span>
              </div>

              {/* Status Driven Order Action Trigger */}
              <button className="text-[10px] font-black uppercase tracking-wider text-white bg-slate-900 group-hover:bg-blue-600 px-3.5 py-2 rounded-xl transition-colors cursor-pointer active:scale-95 shadow-xs">
                Order Now
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default TopRatedFoodsSection;