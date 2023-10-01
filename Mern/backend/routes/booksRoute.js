import express from "express";
import { Book } from "../models/bookModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishyear) {
      return res.status(400).send("please send all fields");
    }

    const books = {
      title: req.body.title,
      author: req.body.author,
      publishyear: req.body.publishyear,
    };

    const book = await Book.create(books);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route to get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.messgae);
    res.status(500).send({ message: error.message });
  }
});

// to get book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const books = await Book.findById(id);
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.messgae);
    res.status(500).send({ message: error.message });
  }
});

//update a book by id
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishyear) {
      return res.status(400).send("please send all fields");
    }

    const { id } = req.params;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "book not found" });
    } else {
      return res.status(200).send({ message: "update successful" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//delete a book by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id, req.body);

    if (result === null) {
      return res.status(404).json({ message: "book not found" });
    } else {
      return res.status(200).send({ message: "Delete successful" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
