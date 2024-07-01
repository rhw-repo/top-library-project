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
  // agregate and concatenate to make intelligble string
  this.info = function info() {
    return (
      this.title + " by " + this.author + this.pages + " pages, " + this.read
    );
  };
}

function buttonClicked() {
  const btn = document.getElementById("submit-btn");
  e.preventDefault();
  btn.addEventListener("click", (e) => () {
 console.log("Button clicked")
  })
}
buttonClicked();

function addBookToLibrary() {
  // code here
}



// this is what the dialog element to use here is, JavaScript
  const dialog = document.querySelector("#dialog");
  // this is what the button element to use here is, JavaScript
  const button = document.querySelector("#add");
// now add the Event Listener to the selected button 
  button.addEventListener("click", () => {  
    // have dialog working as a true modal
    dialog.showModal();
  });

