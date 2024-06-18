import { User } from "../models/userModel.js";

const addFavorite = async (req, res) => {
  const userId = req.user._id;
  const { itemId } = req.body;
  
  if (!itemId) {
    return res.status(400).json({ error: 'Item ID is required' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (!user.favorites.includes(itemId)) {
      user.favorites.push(itemId);
    }
    
    await user.save();

    res.status(201).json({ message: "Favorite added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add favorite" });
  }
};

export default addFavorite;
