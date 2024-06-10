import { User } from "../models/userModel.js";
import bcrypt from 'bcryptjs';

const updatePassword = async (req, res) => {
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
    const userId = req.user._id;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      await user.updatePassword(oldPassword, newPassword, confirmNewPassword);
  
      res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  
  export default updatePassword;