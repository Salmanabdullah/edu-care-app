import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
//signin user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid email or password");
    }
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default loginUser;
