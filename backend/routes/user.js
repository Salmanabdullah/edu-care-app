import express from "express";
import addFavorite from "../controllers/addFavorite.js";
import loginUser from "../controllers/loginController.js";
import removeFavorite from "../controllers/removeFavorite.js";
import signupUser from "../controllers/signupController.js";
import updatePassword from "../controllers/updatePassword.js";
import {
  deleteUser,
  getProfile,
  updateAddress,
} from "../controllers/userProfileController.js";
import requireAuth from "../middlewares/requireAuth.js";

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// update password route (requires authentication)
router.post("/update-password", requireAuth, updatePassword);

// favorite routes
router.post("/favorites", requireAuth, addFavorite);
router.delete("/favorites/:itemId", requireAuth, removeFavorite);

//user profile routes
router.get("/profile", requireAuth, getProfile);
router.patch("/address", requireAuth, updateAddress);
router.delete("/:id", requireAuth, deleteUser);

export default router;
