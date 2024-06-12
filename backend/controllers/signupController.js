import { createToken } from "../JsonWebToken/jwt.js";
import { User } from "../models/userModel.js";
//signup user
const signupUser = async (req, res) => {
  const { name, email, address, password } = req.body;

  try {
    const user = await User.signup(name, email, address, password);

    //Token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default signupUser;
