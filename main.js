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

// grab the list and store it in a variable
const list = document.querySelector(".list");

// the constructor...
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  console.log(this);
  // agregate and concatenate to make intelligble string
  this.info = function info() {
    return (
      // or  `${title} by ${author}, ${pages} pages, ${read}`;
      this.title + " by " + this.author + this.pages + " pages, " + this.read
    );
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet");
myLibrary.push(theHobbit);
console.log(myLibrary);


// Select the form & handle data without using FormData as no database 
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
  const addData = document.createElement("div");
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
  bookAuthorLabel. textContent = "Author: "
  bookAuthor.textContent = authorValue;
  bookPagesLabel.textContent = "No. of pages: "
  bookPages.textContent = numberValue;
  bookReadLabel.textContent = "Has been read:"
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
});

// Select the form's button
const btn = document.querySelector("#submit-btn");
// Add an Event Listener to this button
btn.addEventListener("click", (e) => {
  console.log("Submit button clicked");
  btn.style.color = "blue";
});

// this is what the dialog element to use here is, JavaScript
const dialog = document.querySelector("#dialog");
// this is what the button element to use here is, JavaScript
const button = document.querySelector("#add");
// now add the Event Listener to the selected button
button.addEventListener("click", () => {
  // have dialog working as a true modal
  dialog.showModal();
  button.style.color = "red";
});
