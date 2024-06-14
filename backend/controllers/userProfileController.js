import { User } from "../models/userModel.js";

export const getProfile = async (req, res) => {
    const userId = req.user._id;
    try {
      const user = await User.findById(userId).select('-password');
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user data' });
    }
  };

  export const updateAddress = async (req, res) => {
    const userId = req.user._id;
    const { address } = req.body;
  
    if (!address) {
      return res.status(400).json({ error: 'Address is required' });
    }
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.address = address;
      await user.save();
      res.status(200).json({ message: 'Address updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update address' });
    }
  };
  
  export const deleteUser = async (req, res) => {
    const userId = req.user._id;
  
    try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete account' });
    }
  };