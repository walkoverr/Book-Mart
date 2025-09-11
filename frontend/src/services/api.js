import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/books"
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

export const getBooks = () => API.get("/");
export const addBook = (book) => API.post("/", book);
export const getBookById = (id) => API.get(`/${id}`);
export const deleteBook = (id) => API.delete(`/${id}`);
