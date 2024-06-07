import { User } from "../models/userModel.js";
import { createToken } from "../JsonWebToken/jwt.js";
//signup user
const signupUser = async (req, res) => {
  const {name, email, password} = req.body

  try {
    const user = await User.signup(name, email, password)

    //Token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

export default signupUser;
