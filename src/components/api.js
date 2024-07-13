// api.js
import axios from 'axios';

const baseURL = 'e48c6c79485440fea60e3ded626b7d2b20240713142354836437';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Add any necessary headers (e.g., Authorization headers for authentication)
  },
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data; // Assuming API returns JSON data
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Add more functions for other API endpoints as needed
