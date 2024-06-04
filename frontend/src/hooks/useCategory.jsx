import { useState } from "react";
export const useCategory = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const category = async (req,res) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:5000/api/school', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

}
};
