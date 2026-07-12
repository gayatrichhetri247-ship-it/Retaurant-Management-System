import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [Foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch Foods
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`${API_URL}/Foods`);

        const formattedFoods = response.data.Foods.map((item) => ({
          ...item,
          id: item._id,
          category: item.category?.toLowerCase() || "uncategorized",
        }));

        setFoods(formattedFoods);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch Foods:", err);
        setError("Could not load Foods.");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [API_URL]);

  // Add Food
  const addFood = async (FoodData) => {
    try {
      const response = await axios.post(
        `${API_URL}/Foods/create`,
        FoodData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const Food = response.data.Food;

      setFoods((prev) => [
        ...prev,
        {
          ...Food,
          id: Food._id,
          category: Food.category?.toLowerCase() || "uncategorized",
        },
      ]);

      return response.data;
    } catch (err) {
      console.error("Failed to create Food:", err.response?.data || err);
      throw err;
    }
  };

  // Delete Food
  const removeFood = async (id) => {
    try {
      await axios.delete(`${API_URL}/Foods/${id}`, {
        withCredentials: true,
      });

      setFoods((prev) =>
        prev.filter((Food) => Food._id !== id)
      );
    } catch (err) {
      console.error("Failed to delete Food:", err.response?.data || err);
      throw err;
    }
  };

  return (
    <FoodContext.Provider
      value={{
        Foods,
        loading,
        error,
        addFood,
        removeFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFoods = () => {
  const context = useContext(FoodContext);

  if (!context) {
    throw new Error("useFoods must be used within FoodProvider");
  }

  return context;
};