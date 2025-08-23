import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/books" // later replace with deployed backend URL
});

export const getBooks = () => API.get("/");
export const addBook = (book) => API.post("/", book);
export const getBookById = (id) => API.get(`/${id}`);
export const deleteBook = (id) => API.delete(`/${id}`);
