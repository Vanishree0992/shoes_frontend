import api from "../api/axios";

export const fetchProducts = async () => {
  try {
    const response = await api.get("/products/");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Add item to cart
export const addToCart = async (productId, quantity = 1, sizeId = null) => {
  try {
    const response = await api.post("/cart/add/", {
      product: productId,
      quantity,
      size: sizeId,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return null;
  }
};

// Fetch cart items
export const fetchCart = async () => {
  try {
    const response = await api.get("/cart/");
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    return [];
  }
};