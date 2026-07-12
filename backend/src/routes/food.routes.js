import express from "express";
import { createfood, deletefood, editfood, getfood } from "../../controllers/food.controller.js";
import upload from "../middleware/upload.middleware.js";
import { isAdmin, varifyToken } from "../middleware/auth.middleware.js";

const foodRoutes = express.Router();

foodRoutes.post("/create", upload.single("photo"), createfood);

foodRoutes.get("/", getfood);

foodRoutes.patch(
  "/:id",
  varifyToken,
  isAdmin,
  upload.single("photo"),
  editfood
);

foodRoutes.delete(
  "/:id",
  varifyToken,
  isAdmin,
  deletefood
);

export default foodRoutes;