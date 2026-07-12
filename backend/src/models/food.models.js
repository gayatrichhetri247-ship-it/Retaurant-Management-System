import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    
    photo: {
      type: String, // URL of the boutique food image
      required: true,
    },
    category: {
      type: String, 
      required: true,
      index: true,  // Speeds up your frontend navigation filter queries
    },
    ratings: {
      type: Number,
      default: 4.0, // Default fallback rating as seen on your UI cards
      min: 0,
      max: 5,
    },
    reviewsCount: {
      type: Number,
      default: 0, // Number of reviews showing in parentheses next to the star
    },
  },
  { 
    timestamps: true // Fixed casing from 'timeStamps' to 'timestamps'
  },
);

const FoodModel = mongoose.model("food", foodSchema);
export default FoodModel;