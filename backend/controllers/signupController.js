import { User } from "../models/userModel.js";

//signup user
const signupUser = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).send({ message: "Send all required fields" });
    }
    const newUser = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await User.create(newUser);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export default signupUser;
