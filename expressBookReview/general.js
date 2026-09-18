const express = require('express');
let books = require("./booksdb.js"); // assuming booksdb is present in the assignment repo
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const axios = require('axios');

public_users.post("/register", (req,res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!isValid(username)) { 
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "Customer successfully registered. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});    
    }
  } 
  return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop using async/await and Axios
public_users.get('/', async function (req, res) {
  try {
    // Simulating an external API call using a local Promise, as Axios isn't actually hosting the local object
    const getBooks = new Promise((resolve) => {
      resolve(books);
    });
    const allBooks = await getBooks;
    res.status(200).send(JSON.stringify({ books: allBooks }, null, 4));
  } catch (error) {
    res.status(500).send("Error fetching books");
  }
});

// Get book details based on ISBN using Promises
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  
  const getBookByIsbn = new Promise((resolve, reject) => {
    if (books[isbn]) {
      resolve(books[isbn]);
    } else {
      reject("Book not found");
    }
  });

  getBookByIsbn
    .then((book) => res.status(200).json(book))
    .catch((error) => res.status(404).json({ message: error }));
});
  
// Get book details based on author using async/await
public_users.get('/author/:author', async function (req, res) {
  const author = req.params.author;

  try {
    const getBooksByAuthor = new Promise((resolve) => {
      let booksbyauthor = [];
      let isbns = Object.keys(books);
      isbns.forEach((isbn) => {
        if(books[isbn].author === author) {
          booksbyauthor.push({
            "isbn": isbn,
            "title": books[isbn].title,
            "reviews": books[isbn].reviews
          });
        }
      });
      resolve(booksbyauthor);
    });
    
    const result = await getBooksByAuthor;
    res.status(200).json({ booksbyauthor: result });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books" });
  }
});

// Get all books based on title using Promises
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;

  const getBooksByTitle = new Promise((resolve) => {
    let booksbytitle = [];
    let isbns = Object.keys(books);
    isbns.forEach((isbn) => {
      if(books[isbn].title === title) {
        booksbytitle.push({
          "isbn": isbn,
          "author": books[isbn].author,
          "reviews": books[isbn].reviews
        });
      }
    });
    resolve(booksbytitle);
  });

  getBooksByTitle
    .then((result) => res.status(200).json({ booksbytitle: result }))
    .catch((error) => res.status(500).json({ message: "Error" }));
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  if(books[isbn]){
    res.status(200).json(books[isbn].reviews);
  } else {
    res.status(404).json({message: "Book not found"});
  }
});

module.exports.general = public_users;
