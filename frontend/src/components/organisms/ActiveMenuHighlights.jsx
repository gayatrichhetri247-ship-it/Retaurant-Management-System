import React from 'react';
import { motion } from 'framer-motion';

const ActiveMenuHighlights = ({ dishes = [] }) => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="mx-auto px-4 py-10 sm:px-6 lg:px-8 font-sans">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Active Menu Highlights</h2>
          <p className="text-xs text-slate-500 mt-0.5">Top performing items today</p>
        </div>
        <span className="text-xs font-semibold text-blue-600 cursor-pointer hover:underline">
          See full menu &rarr;
        </span>
      </div>

      {/* Grid Layout / Motion Container */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {dishes.map((dish) => (
          <motion.div
            key={dish.id || dish._id} // Flexible key for backend structures
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            {/* Image Container */}
            <div className="h-48 overflow-hidden relative bg-slate-100">
              <img 
                src={dish.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500'} // fallback image
                alt={dish.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {dish.status && (
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  {dish.status}
                </span>
              )}
            </div>

            {/* Content Details */}
            <div className="p-4">
              <h3 className="font-bold text-slate-800 text-base group-hover:text-blue-600 transition-colors">
                {dish.name}
              </h3>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Prep time: {dish.prepTime || '12 mins'}</span>
                <span className={`${dish.isAvailable !== false ? 'text-emerald-600' : 'text-rose-600'} font-medium`}>
                  {dish.isAvailable !== false ? 'Available' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ActiveMenuHighlights;