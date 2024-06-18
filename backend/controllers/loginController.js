import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { createToken } from "../JsonWebToken/jwt.js";

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(202).json({email, token})
  } catch (error) {
    res.status(401).json({error: error.message})
  }
}

export default loginUser;
