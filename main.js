const myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  console.log(this);
}

// Test Book function and display "book format" to user
const sample = new Book(
  "Sample Book", "Sample Author", 295, "Not read yet"
);
myLibrary.push(sample);
console.log(myLibrary);
displayBooks();

// Push new book to array. 
// Called when sanitized form input data passed to it.
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
  // Select the cards container and store it in a variable
  const libraryContainer = document.querySelector(".library-container");
  // Clear libraryConatiner using while loop before displaying new input
  while (libraryContainer.firstChild) {
    libraryContainer.removeChild(libraryContainer.firstChild);
  }

  // Iterate over myLibrary array, create DOM elements for each book
  myLibrary.forEach((book, index) => {
    // Create a card as a container for each book's data
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

// Select the form, add Event Listener to form's submit event
const addForm = document.getElementById("add-book");
console.log("Form selected:", addForm);
addForm.addEventListener("submit", function (e) {
  // Prevent default submission as functions should run instead
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
  // Add event listener
  .addEventListener("click", () => {
    // call close() method
    dialog.close();
  });
