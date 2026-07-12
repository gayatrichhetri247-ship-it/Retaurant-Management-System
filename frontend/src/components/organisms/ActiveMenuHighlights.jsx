import React from 'react';
import { motion } from 'framer-motion';

// Mock Data featuring exactly one card for each requested category
const MOCK_DISHES = [
  { id: '1', name: 'Hot and spicy foods', category: 'Hot and spicy foods', status: 'Extremely Hot', prepTime: '12 mins', isAvailable: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
  { id: '2', name: 'Daily special menu', category: 'Daily special menu', status: 'Today Only', prepTime: '20 mins', isAvailable: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500' },
  { id: '3', name: 'Tandoori', category: 'Tandoori', status: 'Clay Oven', prepTime: '15 mins', isAvailable: true, image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500' },
  { id: '4', name: 'Desserts', category: 'Desserts', status: 'Sweet', prepTime: '8 mins', isAvailable: true, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500' },
  { id: '5', name: 'Non-Veg', category: 'Non-Veg', status: 'Top Rated', prepTime: '14 mins', isAvailable: true, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500' },
  { id: '6', name: 'Veg', category: 'Veg', status: 'Healthy', prepTime: '6 mins', isAvailable: true, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500' },
  { id: '7', name: 'Dinner Menu', category: 'Dinner Menu', status: 'Main Course', prepTime: '25 mins', isAvailable: true, image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=500' }
];

const TARGET_CATEGORIES = [
  'Hot and spicy foods',
  'Daily special menu',
  'Tandoori',
  'Desserts',
  'Non-Veg',
  'Veg',
  'Dinner Menu'
];

const ActiveMenuHighlights = ({ dishes = MOCK_DISHES }) => {
  const fadeInUp = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  // Find the single card match per category
  const filteredDishes = TARGET_CATEGORIES.map(cat => 
    dishes.find(dish => dish.category?.toLowerCase() === cat.toLowerCase())
  ).filter(Boolean);

  const FoodCard = ({ dish }) => (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      className="flex-shrink-0 w-72 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group snap-start"
    >
      {/* Image Container */}
      <div className="h-44 overflow-hidden relative bg-slate-100">
        <img 
          src={dish.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'} 
          alt={dish.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Category Label Overlay Tag */}
        <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
          {dish.category}
        </span>

        {dish.status && (
          <span className={`absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm
            ${dish.category === 'Hot and spicy foods' ? 'bg-rose-600' : 'bg-blue-600'}`}>
            {dish.status}
          </span>
        )}
      </div>

      {/* Card Content Details */}
      <div className="p-4">
        <h3 className="font-bold text-slate-800 text-sm line-clamp-1 group-hover:text-blue-600 transition-colors">
          {dish.name}
        </h3>
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>{dish.prepTime || '12 mins'}</span>
          <span className={`${dish.isAvailable !== false ? 'text-emerald-600' : 'text-rose-600'} font-semibold`}>
            {dish.isAvailable !== false ? 'Available' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="mx-auto py-10 font-sans bg-slate-50 overflow-hidden space-y-6">
      
      {/* Global Row Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Active Menu Highlights</h2>
          <p className="text-sm text-slate-500 mt-0.5">Categorized menu preview line</p>
        </div>
        <span className="text-sm font-semibold text-blue-600 cursor-pointer hover:underline whitespace-nowrap ml-4">
          See full menu &rarr;
        </span>
      </div>

      {/* Single Horizontal Track Wrapper */}
      <div className="relative">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex gap-6 overflow-x-auto pb-6 pt-2 px-4 sm:px-6 lg:px-8 scrollbar-none scroll-smooth snap-x mandatory"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <style>{`.scrollbar-none::-webkit-scrollbar { display: none; }`}</style>

          {filteredDishes.map((dish) => (
            <FoodCard key={dish.id} dish={dish} />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default ActiveMenuHighlights;