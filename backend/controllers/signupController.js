import { createToken } from "../JsonWebToken/jwt.js";
import { User } from "../models/userModel.js";
//signup user
const signupUser = async (req, res) => {
  const { name, email, address, password } = req.body;

  try {
    const user = await User.signup(name, email, address, password);

    //Token
    const token = createToken(user._id);

    res.status(201).json({ email, token });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default signupUser;
