const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./connection/dbConnection.js");
const bookRoutes = require("./routes/bookRoutes.js");
const userRoutes = require("./routes/userRoutes.js");


dotenv.config();
const app = express();
const allowedOrigins = [
  "https://book-mart-rose.vercel.app", // <== your deployed frontend
  "http://localhost:5173",                  // for local dev (optional)
];
app.use(cors(
  {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const PORT = process.env.PORT || 5000;


connectDB()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);


