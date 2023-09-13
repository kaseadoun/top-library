const addBookButton = document.getElementById("addBook");

const myLibrary = ["Book 1", "Book 2", "Necronomicon"];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");

    Book(title.textContent, author.textContent, pages.value);
}

function displayLibrary() {
    const library = document.getElementById("library");

    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement("div");
        const bookTitle = document.createElement("h3");
        const deleteBook = document.createElement("button");

        bookTitle.textContent = myLibrary[i];
        bookCard.appendChild(bookTitle);
        bookCard.setAttribute("class", "bookCard");
        deleteBook.textContent = "Remove Book";
        bookCard.appendChild(deleteBook);
        library.appendChild(bookCard);
    }
}

addBookButton.addEventListener("mousedown", displayLibrary)

