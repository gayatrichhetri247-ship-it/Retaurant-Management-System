import express from "express"
import { getMe, getUsers, LoginUser, LogoutUser, registerUser } from "../../controllers/user.controller.js";
import { varifyToken } from "../middleware/auth.middleware.js";
import { googleLogin, googleSignup } from "../../controllers/google.controller.js";


const userRoutes = express.Router()

userRoutes.route("/sign-up").post(registerUser);
userRoutes.route("/login").post(LoginUser);
userRoutes.route("/logout").post(LogoutUser);
userRoutes.route("/get-me").get(varifyToken, getMe);
userRoutes.route("/").get(getUsers);
userRoutes.post("/google-signup", googleSignup);
userRoutes.post("/google-login", googleLogin);

export default userRoutes;