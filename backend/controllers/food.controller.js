
import fs from "fs";
import FoodModel from "../src/models/food.models.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

// CREATE food
export const createfood = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      oldPrice,
      category,
      ratings,
      reviewsCount,
    } = req.body;

    let url = null;

    if (req.file) {
      console.log("File exists:", fs.existsSync(req.file.path));
      console.log("File path:", req.file.path);

      const result = await uploadOnCloudinary(req.file.path);

      if (!result) {
        return res.status(500).json({
          success: false,
          message: "Cloudinary upload failed",
        });
      }

      url = result.secure_url;
    }

    const food = await FoodModel.create({
      name,
      description,
      price,
      oldPrice,
      category,
      ratings,
      reviewsCount,
      photo: url,
    });

    return res.status(201).json({
      success: true,
      message: "food created successfully",
      food,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL foodS
export const getfood = async (req, res) => {
  try {
    const foods = await FoodModel.find();

    return res.status(200).json({
      success: true,
      foods,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE food
export const deletefood = async (req, res) => {
  try {
    const { id } = req.params;

    const food = await FoodModel.findById(id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "food not found",
      });
    }

    await FoodModel.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "food deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// EDIT food
export const editfood = async (req, res) => {
  try {
    const { id } = req.params;

    const food = await FoodModel.findById(id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "food not found",
      });
    }

    const {
      name,
      description,
      price,
      oldPrice,
      category,
      ratings,
      reviewsCount,
    } = req.body;

    let url = food.photo;

    if (req.file) {
      const result = await uploadOnCloudinary(req.file.path);

      if (result) {
        url = result.secure_url;
      }
    }

    const updatedfood = await FoodModel.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        oldPrice,
        category,
        ratings,
        reviewsCount,
        photo: url,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "food updated successfully",
      food: updatedfood,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};