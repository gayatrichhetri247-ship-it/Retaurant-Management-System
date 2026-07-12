import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaDollarSign,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import food from "../../assets/images/foods/food.jpg";


const HeroSection = () => {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning ☀️"
      : hour < 18
      ? "Good Afternoon 🌤️"
      : "Good Evening 🌙";

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 lg:p-12 shadow-sm">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <p className="text-blue-600 font-semibold text-lg mb-2">
            {greeting}
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Welcome to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Food Corner
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl leading-8">
            Manage orders, monitor sales, track reservations and deliver
            exceptional dining experiences from one powerful dashboard.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              View Menu
            </button>

            
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 0.8,
            y: {
              repeat: Infinity,
              duration: 4,
            },
          }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">

            <img
              src={food}
              alt=""
              className="w-[420px] rounded-3xl shadow-2xl border-8 border-white"
            />

           

          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;