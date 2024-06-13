import { useAuthContext } from "./useAuthContext";

const useFavorite = () => {
  const { user } = useAuthContext();

  const addFavorite = async (itemId) => {
    if (!user) {
      throw new Error("User is not authenticated");
    }

    const response = await fetch("http://localhost:5000/api/user/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ itemId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to add favorite");
    }

    const data = await response.json();
    return data;
  };

  const removeFavorite = async (itemId) => {
    if (!user) {
      throw new Error('User is not authenticated');
    }

    const response = await fetch(`http://localhost:5000/api/user/favorites/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to remove favorite');
    }

    const data = await response.json();
    return data;
  };

  return { addFavorite, removeFavorite };
};


export default useFavorite;
