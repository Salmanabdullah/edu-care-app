import express from "express";
import loginUser from "../controllers/loginController.js"
import signupUser from "../controllers/signupController.js"

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

export default router;
