/* 
All of your book objects are going to be stored in an array, 
so add a function to the script (not the constructor) that can 
take user’s input and store the new book objects into an array.  
https://www.theodinproject.com/lessons/node-path-javascript-library#project-solution
*/

//debug needed doesn't even load resource
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

// Create a new FormData object?
// pass form element to FormData built in JavaScript constructor method
// automatically captures input field names & their values
// stores those as a key value pair - name & value
//const formData = new FormData(form);

// Create an Array
const myLibrary = [];

// the constructor...
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  console.log(this);
  /* agregate and concatenate to make intelligble string
  this.info = function info() {
    return (
      // or  `${title} by ${author}, ${pages} pages, ${read}`;
      this.title + " by " + this.author + this.pages + " pages, " + this.read
    );
  };*/
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
  myLibrary.forEach(book => {
    // Create a container
    const addData = document.createElement("div");
    // Create each element required within container
    const bookTitleLabel = document.createElement("span");
    const bookName = document.createElement("span");
    const bookAuthorLabel = document.createElement("span");
    const bookAuthor = document.createElement("span");
    const bookPagesLabel = document.createElement("span");
    const bookPages = document.createElement("span");
    const bookReadLabel = document.createElement("span");
    const bookRead = document.createElement("span");
    const deleteBtn = document.createElement("span");

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

      // next append values to the DOM
    addData.appendChild(bookTitleLabel);
    addData.appendChild(bookName);
    addData.appendChild(bookAuthorLabel);
    addData.appendChild(bookAuthor);
    addData.appendChild(bookPagesLabel);
    addData.appendChild(bookPages);
    addData.appendChild(bookReadLabel);
    addData.appendChild(bookRead);
    addData.appendChild(deleteBtn);

 // append to document 
 list.appendChild(addData);
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
document.querySelector(".dialog__form--close-btn").addEventListener("click", () => {
  dialog.close();
});

/* Debugging Select the form's button
const btn = document.querySelector("#submit-btn");
// Add an Event Listener to this button
btn.addEventListener("click", (e) => {
  console.log("Submit button clicked");
  btn.style.color = "blue";
});*/



/* Select the form & handle data without using FormData as no database
const addForm = document.forms["add-book"];
// add Event Listener to form's submit event, not to submit button
// because it is form that emits the event, when we click the button
// and not the button itself
addForm.addEventListener("submit", function (e) {
  e.preventDefault;
  // grab value of input put into field
  const value = addForm.querySelector('input[name="title"]').value;
  console.log(value);
  const authorValue = addForm.querySelector('input[name="author"]').value;
  console.log(authorValue);
  const numberValue = addForm.querySelector('input[type="number"]').value;
  console.log(numberValue);
  // attribute to grab here is not value - it is checked boolean, true or false
  const checkboxValue = addForm.querySelector('input[id="switch"]').checked;
  console.log(checkboxValue);

  // create elements
  /*const addData = document.createElement("div");
  const bookTitleLabel = document.createElement("span");
  const bookName = document.createElement("span");
  const bookAuthorLabel = document.createElement("span");
  const bookAuthor = document.createElement("span");
  const bookPagesLabel = document.createElement("span");
  const bookPages = document.createElement("span");
  const bookReadLabel = document.createElement("span");
  const bookRead = document.createElement("span");

  // other elements
  const deleteBtn = document.createElement("span");

  // add text content
  bookTitleLabel.textContent = "Title: ";
  bookName.textContent = value;
  bookAuthorLabel.textContent = "Author: ";
  bookAuthor.textContent = authorValue;
  bookPagesLabel.textContent = "No. of pages: ";
  bookPages.textContent = numberValue;
  bookReadLabel.textContent = "Has been read:";
  bookRead.textContent = checkboxValue;
  deleteBtn.textContent = "delete";

  //
  // next append values to the DOM
  addData.appendChild(bookTitleLabel);
  addData.appendChild(bookName);
  addData.appendChild(bookAuthorLabel);
  addData.appendChild(bookAuthor);
  addData.appendChild(bookPagesLabel);
  addData.appendChild(bookPages);
  addData.appendChild(bookReadLabel);
  addData.appendChild(bookRead);
  addData.appendChild(deleteBtn);

  // append to document within the card
  list.appendChild(addData);
});*/