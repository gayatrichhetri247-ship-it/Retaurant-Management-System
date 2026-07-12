import api from "./api.instance";


export const addfood = async (data) => {
  try {
    const res = await api.post("/foods/create", data);
    console.log("Add food Success:", res.data);
    return res.data;
  } catch (error) {
    console.error("Failed to create food:", error.response?.data || error.message);
    throw error;
  }
};
export const getfoods = async () => {
  try {
    const res = await api.get("/foods");
    console.log("Get foods Success:", res.data);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch foods:", error.response?.data || error.message);
    throw error;
  }
};
export const deletefood = async (id) => {
  try {
    const res = await api.delete(`/foods/${id}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch foods:", error.response?.data || error.message);
    throw error;
  }
};
export const editfood = async (id, data) => {
  try {
    const res = await api.patch(`/foods/${id}`,data);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch foods:", error.response?.data || error.message);
    throw error;
  }
};