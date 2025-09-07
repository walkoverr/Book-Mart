import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api" // later replace with deployed backend URL
});

export const getBooks = () => API.get("/books");
export const addBook = (book) => API.post("/books", book);
export const getBookById = (id) => API.get(`/books/${id}`);
export const deleteBook = (id) => API.delete(`/books/${id}`);
