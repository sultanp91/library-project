let myLibrary = [];

const book = document.getElementById("bookname");
const author = document.getElementById("author");
const bookPages = document.getElementById("totalpages");
const bookRead = document.getElementById("readstatus");
const addButton = document.getElementById("addbook");
const table = document.getElementById("tbody");
const newBookButton = document.getElementById("newbook");

const formContainer = document.getElementById("form-container");


const generateTable = function () {
    table.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td id=${i}>${myLibrary[i].name}</td>
                        <td id=${i}>${myLibrary[i].author}</td>
                        <td id=${i}>${myLibrary[i].numPages}</td>
                        <td class="completion" id=${i}>${myLibrary[i].bookRead}</td>
                        <td class="delete" id=${i}>Delete<i class="icon-basic-trashcan"></></td>`;

    table.appendChild(newRow);
}}

newBookButton.addEventListener("click", () => {
    if(formContainer.style.display === "none"){
        formContainer.style.display = "block";
        newBookButton.textContent = "Close Form"
    } else {
        newBookButton.textContent = "New Book"
        formContainer.style.display = "none";
    }
    
})

addButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    if(book.value === "" || author.value === "" || bookPages.value === ""){
        alert("Please fill in all fields before adding a book") 
    } else {
        
    let newBook = {
        name: book.value,
        author: author.value,
        numPages: bookPages.value,
        bookRead: bookRead.value,
        }
    
        myLibrary.push(newBook);
        document.querySelector("form").reset();
    
        generateTable();

    }
    
})

table.addEventListener("click", function(evt) {
if(evt.target.className == "delete"){
    myLibrary.splice(evt.target.id, 1)
    generateTable();
} else if(evt.target.className == "completion" && myLibrary[evt.target.id].bookRead == "Read"){
    myLibrary[evt.target.id].bookRead = "Unread"
    generateTable()
} else if(evt.target.className == "completion" && myLibrary[evt.target.id].bookRead == "Unread"){
    myLibrary[evt.target.id].bookRead = "Read"
    generateTable()
}
}); 