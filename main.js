/* INSTRUCTIONS
All of your book objects are going to be stored in an array, 
so add a function to the script (not the constructor) that can 
take user’s input and store the new book objects into an array.  
https://www.theodinproject.com/lessons/node-path-javascript-library#project-solution
*/

//TODO Debug needed doesn't even load resource
// console.log('DOMPurify:', DOMPurify);
/* Sanitize inputs using DOMPurify
 const sanitizedTitle = DOMPurify.sanitize(formData.get('title'));
 const sanitizedAuthor = DOMPurify.sanitize(formData.get('author'));
 const sanitizedPages = DOMPurify.sanitize(formData.get('pages'));
 const sanitizedRead = DOMPurify.sanitize(formData.get('switch'));

 // Log sanitized inputs to console for verification
 console.log('Sanitized Title:', sanitizedTitle);
 console.log('Sanitized Author:', sanitizedAuthor);
 console.log('Sanitized Pages:', sanitizedPages);
 console.log('Sanitized Read:', sanitizedRead);*/

// Create an Array
const myLibrary = [];

// the constructor...
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  console.log(this);
}

// Debugging block to check Book function runs
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
myLibrary.push(theHobbit);
console.log(myLibrary);

// Push a new book to array, is later called with form input passed to it
function addBookToLibrary(title, author, pages, read) {
  // Create a new Book object
  const newBook = new Book(title, author, pages, read);
  // Push this new Book object to the array
  myLibrary.push(newBook);
  console.log("Updated library:", myLibrary);
  console.log(newBook);
  // Call displayBooks() to append the new Book object to the DOM
  displayBooks();
}

function displayBooks() {
  // Select the list and store it in a variable
  const list = document.querySelector(".list");
  // Clear list using while loop before displaying new input
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Iterate over myLibrary array, create DOM elements for each book
  myLibrary.forEach((book) => {
    // Create a container
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book");

    // Create each element required within container, add classes
    const bookTitleLabel = document.createElement("span");
    bookTitleLabel.classList.add("book__label", "book__label--title");
    const bookName = document.createElement("span");
    bookName.classList.add("book__name");

    const bookAuthorLabel = document.createElement("span");
    bookAuthorLabel.classList.add("book__label", "book__label--author");
    const bookAuthor = document.createElement("span");
    bookAuthor.classList.add("book__author");

    const bookPagesLabel = document.createElement("span");
    bookPagesLabel.classList.add("book__label", "book__label--pages");
    const bookPages = document.createElement("span");
    bookPages.classList.add("book__pages");

    const bookReadLabel = document.createElement("span");
    bookReadLabel.classList.add("book__label", "book__label--read");
    const bookRead = document.createElement("span");
    bookRead.classList.add("book__read");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("book__delete");

    // Add text content
    bookTitleLabel.textContent = "Title: ";
    bookName.textContent = book.title;
    bookAuthorLabel.textContent = "Author: ";
    bookAuthor.textContent = book.author;
    bookPagesLabel.textContent = "No. of pages: ";
    bookPages.textContent = book.pages;
    bookReadLabel.textContent = "Has been read: ";
    // Display 'Yes' if read is true, otherwise 'No'
    bookRead.textContent = book.read ? "Yes" : "No";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBooks();
    });

    // Append values to the DOM
    bookContainer.appendChild(bookTitleLabel);
    bookContainer.appendChild(bookName);
    bookContainer.appendChild(bookAuthorLabel);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookPagesLabel);
    bookContainer.appendChild(bookPages);
    bookContainer.appendChild(bookReadLabel);
    bookContainer.appendChild(bookRead);
    bookContainer.appendChild(deleteBtn);

    // Append to document
    list.appendChild(bookContainer);
  });
}

// Select the form, add Event Listener to form's submit event
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function (e) {
  // Prevent default submission as functions should run instead
  e.preventDefault();
  // Extract form data
  const title = this.querySelector('input[name="title"]').value;
  const author = this.querySelector('input[name="author"]').value;
  const pages = this.querySelector('input[name="pages"]').value;
  const read = this.querySelector('input[id="switch"]').checked;

  // Log the extracted form data
  console.log("Form data:", { title, author, pages, read });

  // Call addBookToLibrary passing in form data
  addBookToLibrary(title, author, pages, read);

  // Clear form fields after submission
  this.reset();
  document.querySelector("#dialog").close();
});

// Select the dialog
const dialog = document.querySelector("#dialog");
// Select the Add New button
const button = document.querySelector("#add");
// Add Event Listener to that button
button.addEventListener("click", () => {
  // Have dialog working as a true modal
  dialog.showModal();
});

// Select the close button within dialog
document
  .querySelector(".dialog__form--close-btn")
  .addEventListener("click", () => {
    dialog.close();
  });
