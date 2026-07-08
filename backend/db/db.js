import mongoose from "mongoose";

const connectDB = async () =>{
   try {
    await mongoose.connect("mongodb://localhost:27017/restaurantManagementSystem");
    console.log("Database Connected");
    
   } catch (error) {
    console.log("Error connecting to database:", error);
   }
}

export default connectDB;