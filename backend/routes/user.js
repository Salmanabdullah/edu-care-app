import express from "express";
import loginUser from "../controllers/loginController.js"
import signupUser from "../controllers/signupController.js"
import updatePassword from "../controllers/updatePassword.js";
import requireAuth from "../middlewares/requireAuth.js";
import addFavorite from "../controllers/addFavorite.js";


const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// update password route (requires authentication)
router.post("/update-password", requireAuth, updatePassword);

// add favorite route
router.post("/favorites", requireAuth, addFavorite);

export default router;
