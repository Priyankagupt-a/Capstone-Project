import axios from "axios";

// Base URL of the backend server
const API_URL = "http://localhost:5000/products";

// Fetch all products (Read)
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};


// export const createProduct = async (product) => {
//   try {
//     const response = await axios.post(API_URL, product);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating product:", error);
//     throw error;
//   }
// };


// export const updateProduct = async (id, updatedProduct) => {
//   try {
//     const response = await axios.put(`${API_URL}/${id}`, updatedProduct);
//     return response.data;
//   } catch (error) {
//     console.error("Error updating product:", error);
//     throw error;
//   }
// };


// export const deleteProduct = async (id) => {
//   try {
//     const response = await axios.delete(`${API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting product:", error);
//     throw error;
//   }
// };