import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import userModel from "../src/models/user.model.js";


const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleSignup = async (req, res) => {
  try {
    const { credential } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { sub, email, name, picture } = payload;

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Account already exists. Please login.",
      });
    }

    const user = await userModel.create({
      fullName: name,
      email,
      googleId: sub,
      image: picture,
      provider: "google",
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      message: "Google signup successful",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { email } = payload;

    const user = await userModel.findOne({
      email,
      provider: "google",
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Please sign up with Google first.",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      message: "Google login successful",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};