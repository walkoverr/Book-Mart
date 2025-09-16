import axios from "axios";

const API = axios.create({
  // https://book-mart-1h2v.onrender.com
  // http://localhost:5000
  baseURL: "https://book-mart-1h2v.onrender.com/api"
});

// Add token to requests if available
API.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");
  if (user) {
    const token = JSON.parse(user).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getBooks = () => API.get("/books");
export const addBook = (book) => API.post("/books", book);
export const getBookById = (id) => API.get(`/books/${id}`);
export const deleteBook = (id) => API.delete(`/books/${id}`);
