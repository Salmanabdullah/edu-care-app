import { User } from "../models/userModel.js";

const addFavorite = async (req, res) => {
  const userId = req.user._id;
  const { itemId } = req.body;
  
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

  
    user.favorites.push(itemId);
    await user.save();

    res.status(200).json({ message: "Favorite added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add favorite" });
  }
};

export default addFavorite;
