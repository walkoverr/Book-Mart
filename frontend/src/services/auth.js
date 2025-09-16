import axios from "axios";

const API = axios.create({
  baseURL: "https://book-mart-1h2v.onrender.com/api"
});

export const signup = (userData) => API.post("/users/signup", userData);
export const login = (userData) => API.post("/users/login", userData);
