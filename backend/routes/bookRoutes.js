import express from "express";
import { addBook, getBooks, getBookById, deleteBook } from "../controllers/bookController.js";

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.delete("/:id", deleteBook);

export default router;
