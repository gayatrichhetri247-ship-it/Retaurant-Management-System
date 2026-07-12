import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const FoodCard = ({ food, onIncrement, onDecrement, onRemove }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, x: -20 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      whileHover={{ y: -2 }}
      className="group relative flex h-24 items-center gap-3 rounded-xl border border-gray-100 bg-white p-2 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-md hover:shadow-blue-500/5 sm:gap-4 sm:p-2.5"
    >
      {/* Full Image Container (object-contain ensures no cropping) */}
      <motion.div 
        whileHover={{ scale: 1.03 }}
        className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50/50 border border-gray-100 p-1"
      >
        <img
          src={food.photo}
          alt={food.name}
          className="h-full w-full object-contain object-center mix-blend-multiply"
        />
      </motion.div>

      {/* Food Details */}
      <div className="flex flex-1 flex-col justify-between self-stretch py-0.5">
        <div className="flex justify-between items-start gap-2 pr-6 sm:pr-0">
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-gray-800 truncate sm:text-base group-hover:text-blue-950">
              {food.name}
            </h2>
            <p className="mt-0.5 text-xs text-gray-400 line-clamp-1 max-w-[150px] sm:max-w-none">
              {food.description}
            </p>
          </div>
          
          <motion.p 
            key={food.quantity * food.price}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-right text-sm font-black text-blue-600 whitespace-nowrap sm:text-base"
          >
            Rs. {(food.price * food.quantity).toFixed(2)}
          </motion.p>
        </div>

        {/* Quantity & Actions Row */}
        <div className="flex items-center justify-between">
          {/* Interactive Quantity Selector */}
          <div className="flex items-center bg-gray-50 border border-gray-200/60 p-0.5 rounded-lg group-hover:border-blue-100 group-hover:bg-blue-50/30">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDecrement}
              disabled={food.quantity <= 0}
              className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md text-gray-400 hover:bg-white hover:text-blue-600 shadow-xs transition-all disabled:opacity-30 disabled:pointer-events-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
              </svg>
            </motion.button>
            
            <div className="overflow-hidden w-6 text-center">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={food.quantity}
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -6, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block font-extrabold text-blue-900 text-xs sm:text-sm"
                >
                  {food.quantity}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onIncrement}
              className="w-6 h-6 flex items-center justify-center cursor-pointer rounded-md text-gray-400 hover:bg-white hover:text-blue-600 shadow-xs transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </motion.button>
          </div>

          {/* Remove Button (Desktop Viewport) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRemove}
            className="hidden sm:flex items-center gap-1.5 text-[11px] cursor-pointer font-bold text-gray-400 hover:text-red-500 transition-colors duration-200 group/btn bg-transparent hover:bg-red-50/40 px-2 py-1 rounded-lg border border-transparent hover:border-red-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:-rotate-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <span>Remove</span>
          </motion.button>
        </div>
      </div>

      {/* Absolute Positioned Remove Button for Mobile Viewports */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onRemove}
        className="absolute top-2 right-2 sm:hidden p-1 rounded-full bg-gray-50/80 backdrop-blur-xs text-gray-400 hover:bg-red-50 hover:text-red-500 border border-gray-100/50 transition-all cursor-pointer"
        aria-label="Remove item"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default FoodCard;