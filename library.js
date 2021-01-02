let myLibrary = [];

const book = document.getElementById("bookname");
const author = document.getElementById("author");
const bookPages = document.getElementById("totalpages");
const bookRead = document.getElementById("readstatus");
const addButton = document.getElementById("addbook");
const table = document.getElementById("tbody")

const generateTable = function () {
    table.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td id=${i}>${myLibrary[i].name}</td>
                        <td id=${i}>${myLibrary[i].author}</td>
                        <td id=${i}>${myLibrary[i].numPages}</td>
                        <td id=${i}>${myLibrary[i].bookRead}</td>
                        <td class="completion" id=${i}>Change status</td> 
                        <td class="delete" id=${i}>Delete</td>`;

    table.appendChild(newRow);
}}


addButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    
    let newBook = {
    name: book.value,
    author: author.value,
    numPages: bookPages.value,
    bookRead: bookRead.value,
    }

    myLibrary.push(newBook);
    document.querySelector("form").reset();

    generateTable();
})

table.addEventListener("click", function(evt) {
if(evt.target.className == "delete"){
    myLibrary.splice(evt.target.id, 1)
    generateTable();
} else if(evt.target.className == "completion" || myLibrary[evt.target.id].bookRead == "Read"){
    myLibrary[evt.target.id].bookRead = "Unread"
    generateTable()
} else if(evt.target.className == "completion" || myLibrary[evt.target.id].bookRead == "Unread"){
    myLibrary[evt.target.id].bookRead = "Read"
    generateTable()
}
}); 