import { User } from "../models/userModel.js";

const removeFavorite = async (req, res) => {
  const userId = req.user._id;
  const { itemId } = req.params;
  
  if (!itemId) {
    return res.status(400).json({ error: 'Item ID is required' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.favorites = user.favorites.filter(fav => fav.toString() !== itemId);

    await user.save();

    res.status(200).json({ message: "Favorite removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to remove favorite" });
  }
};

export default removeFavorite;
