/* 
All of your book objects are going to be stored in an array, 
so add a function to the script (not the constructor) that can 
take user’s input and store the new book objects into an array.  
https://www.theodinproject.com/lessons/node-path-javascript-library#project-solution
*/

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
// Select the form's button
const btn = document.querySelector("#submit-btn");

function validateForm() {

}

/*function addBookToLibrary(frm) {
  const myBook = new Book(
   // document.this("title").value,
   // document.this("author").value
    //document.getElementById("pages").value,
    //document.getElementById("read").value
  );
  //myLibrary.push(myBook);
  
}*/

// Add an Event Listener to this button
btn.addEventListener("click", (e) => {
  //e.preventDefault();
  console.log("Submit button clicked");
  btn.style.color = "blue";
  //addBookToLibrary();
  console.log(myLibrary);
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
