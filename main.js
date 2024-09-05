/**
 * Array of Book objects
 * @type {Book[]}
 */
const myLibrary = [];

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {number} pages - The number of pages in the book.
 * @param {boolean} read - The read status of the book (true if read, otherwise false ).
 */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/**
 * Provide an example book. Adds it to the library.
 * Demonstrates the format of the Book object.
 */
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
myLibrary.push(theHobbit);
// Update UI to display the example book
displayBooks();

/**
 * Push a new book to array
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {number} pages - The number of pages in the book.
 * @param {boolean} read -  Indicates if the book has been read
 *                          (true if read, otherwise false ).
 */
function addBookToLibrary(title, author, pages, read) {
  // Create a new Book object
  const newBook = new Book(title, author, pages, read);
  // Push this new Book object to the array
  myLibrary.push(newBook);
  /* Update UI by calling displayBooks(), 
  appends the new Book object to the DOM */
  displayBooks();
}

/**
 * Updates UI to display only Book objects in myLibrary array
 * Adds delete button to each Book object's card to remove if required
 *
 */
function displayBooks() {
  // Select the cards container. Store in a variable
  const libraryContainer = document.querySelector(".container");
  // Clear libraryContainer.
  while (libraryContainer.firstChild) {
    libraryContainer.removeChild(libraryContainer.firstChild);
  }

  // Iterate over myLibrary array, create DOM elements for each book
  myLibrary.forEach((book, index) => {
    // Create a card as a container for each book's data
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("card");
   
    // Create each element required within container, add classes
    const bookTitleLabel = document.createElement("span");
    bookTitleLabel.classList.add("card__label", "card__label--title");
    const bookName = document.createElement("span");
    bookName.classList.add("card__name");

    const bookAuthorLabel = document.createElement("span");
    bookAuthorLabel.classList.add("card__label", "card__label--author");
    const bookAuthor = document.createElement("span");
    bookAuthor.classList.add("card__author");

    const bookPagesLabel = document.createElement("span");
    bookPagesLabel.classList.add("card__label", "card__label--pages");
    const bookPages = document.createElement("span");
    bookPages.classList.add("card__pages");

    const bookReadLabel = document.createElement("span");
    bookReadLabel.classList.add("card__label", "card__label--read");
    const bookRead = document.createElement("span");
    bookRead.classList.add("card__read");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("card__delete");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-solid", "fa-trash", "fa-2x");
    deleteBtn.appendChild(trashIcon);

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
    libraryContainer.appendChild(bookContainer);
  });
}

/**
 * Handles submission of add-book form. Prevents default form behavior,
 * extracts and sanitizes user input, passes it to addBookToLibrary
 * function, clears form fields and closes the dialog.
 * @constant addForm - Form element that collects new book data.
 * @listens submit - Listens for form submit event to trigger book addition.
 */
const addForm = document.getElementById("add-book");
// Attach event listener to handle form submission
addForm.addEventListener("submit", function (e) {
  // Prevent default submission (avoid page reload)
  e.preventDefault();
  // Extract form data
  const title = this.querySelector('input[name="title"]').value;
  const author = this.querySelector('input[name="author"]').value;
  const pages = this.querySelector('input[name="pages"]').value;
  const read = this.querySelector('input[id="switch"]').checked;

  // Sanitize inputs
  const sanitizedTitle = DOMPurify.sanitize(title);
  const sanitizedAuthor = DOMPurify.sanitize(author);
  const sanitizedPages = DOMPurify.sanitize(pages);

  // Call addBookToLibrary passing in sanitized form data
  addBookToLibrary(sanitizedTitle, sanitizedAuthor, sanitizedPages, read);

  // Clear form fields after submission
  this.reset();
  document.querySelector("#dialog").close();
});

/**
 * Open dialog, prevent interaction with rest of page until closed.
 *
 * @constant {HTMLDialogElement} dialog - To add new books.
 * @constant {HTMLButtonElement} button - To open dialog.
 */
const dialog = document.querySelector("#dialog");
// Select the Add New button
const button = document.querySelector("#add");
// Add Event Listener to that button
button.addEventListener("click", () => {
  // Prevent interaction with page until dialog closed
  dialog.showModal();
});

/**
 * Adds event listener to dialog button to close dialog
 * @constant {HTMLButtonElement} button - Closes dialog
 */
document
  .querySelector(".dialog__close-btn")
  // Add event listener
  .addEventListener("click", () => {
    // Call close() method
    dialog.close();
  });
