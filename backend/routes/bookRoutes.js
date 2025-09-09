const express = require("express");
const {addBook, getBooks, getBookById, deleteBook} = require("../controllers/bookController.js");
const {protect} = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/", protect, addBook);   // only logged-in user can add
router.get("/", getBooks);
router.get("/:id", getBookById);
router.delete("/:id", protect, deleteBook); // only logged-in user can delete

module.exports = router;
