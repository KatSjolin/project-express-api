import express from "express";
import cors from "cors";
import booksData from "./data/books.json";

// import topMusicData from "./data/top-music.json";
// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

// Get all books
// http://localhost:8080/books
app.get('/books', (req, res) => {
  res.json(booksData)
})

// Get one book based on ID
// http://localhost:8080/books/7
app.get('/books/:bookID', (req, res) => {
  const { bookID } = req.params

  const book = booksData.find(book => +bookID === book.bookID)

  if (book) {
    res.json(book)
  } else {
    res.status(404).send('No book was found')
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
