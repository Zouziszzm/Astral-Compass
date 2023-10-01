import express, { response } from "express";
import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";
const app = express();
const PORT = process.env.PORT || 3000;
import cors from "cors";
import bookRoute from "./routes/booksRoute.js";

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1> This is the Start </h1>");
});

//
app.use("/books", bookRoute);
mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${3000}`);
    });

    console.log("Connected to DataBase");
  })
  .catch((error) => {
    console.log(error.message);
  });
