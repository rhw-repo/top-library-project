/* 
All of your book objects are going to be stored in an array, 
so add a function to the script (not the constructor) that can 
take user’s input and store the new book objects into an array.  
https://www.theodinproject.com/lessons/node-path-javascript-library#project-solution
*/


console.log('DOMPurify:', DOMPurify); 


// Create an Array
const myLibrary = [];
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

// Select the form
const form = document.getElementById("myForm");
// add Event Listener to the submit, prevent default submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create a new FormData object
  // pass form element to FormData built in constructor
  // automatically captures input field names & their values
  // stores those as a key value pair - name & value
  const formData = new FormData(form);

 // Sanitize inputs using DOMPurify
 const sanitizedTitle = DOMPurify.sanitize(formData.get('title'));
 const sanitizedAuthor = DOMPurify.sanitize(formData.get('author'));
 const sanitizedPages = DOMPurify.sanitize(formData.get('pages'));
 const sanitizedRead = DOMPurify.sanitize(formData.get('switch'));

 // Log sanitized inputs to console for verification
 console.log('Sanitized Title:', sanitizedTitle);
 console.log('Sanitized Author:', sanitizedAuthor);
 console.log('Sanitized Pages:', sanitizedPages);
 console.log('Sanitized Read:', sanitizedRead);
});

// Select the form's button
const btn = document.querySelector("#submit-btn");

function addBookToLibrary(frm) {
  // add code here
}

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
