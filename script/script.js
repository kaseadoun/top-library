const addBookButton = document.getElementById("addBook");
const library = document.getElementById("library");

const myLibrary = [];

let bookIndex = 0;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const readCheck = document.querySelector('input[name="read-check"]:checked');

    if (checkForExistingBook(title.value, author.value, pages.value)) {
        console.log("Book exists");
        return true;
    } else {
        const newBook = new Book(title.value, author.value, pages.value, readCheck.value);

        myLibrary.push(newBook);
    }
    // console.log(myLibrary);
    title.value = "";
    author.value = "";
    pages.value = "";
    readCheck.checked = false;
}

function displayLibrary(event) {
    if (addBookToLibrary()) {
        return;
    } else {
        for (bookIndex; bookIndex < myLibrary.length; bookIndex++) {
            // Selectors
            const bookCard = document.createElement("div");
            const bookTitle = document.createElement("h3");
            const bookAuthor = document.createElement("p");
            const bookPages = document.createElement("p");
            const deleteBook = document.createElement("button");
            const readBook = document.createElement("p");
            const readBookButton = document.createElement("button");

            // Appending the content
            bookTitle.textContent = myLibrary[bookIndex].title;
            bookCard.appendChild(bookTitle);
            bookAuthor.textContent = myLibrary[bookIndex].author;
            bookCard.appendChild(bookAuthor);
            bookPages.textContent = myLibrary[bookIndex].pages;
            bookCard.appendChild(bookPages);
            readBookButton.textContent = myLibrary[bookIndex].read;

            // Set class to book card
            bookCard.setAttribute("class", "bookCard");

            // Setting up delete book button
            deleteBook.textContent = "Remove Book";
            deleteBook.setAttribute("class", "deleteBook");

            // Appending delete and read status button
            bookCard.appendChild(deleteBook).addEventListener('click', removeBook);
            bookCard.appendChild(readBookButton).addEventListener('click', readStatusChange);

            // Appending book card to the library container
            library.appendChild(bookCard);
        }
    }
}

function removeBook() {
    // Select nodelist of the book cards
    const bookCards = document.querySelectorAll(".bookCard");

    // Get an Array version of the nodelist
    const arrayOfBookCards = Array.from(bookCards);

    let cardIndex = arrayOfBookCards.indexOf(this.closest('div'));

    myLibrary.splice(cardIndex, 1);

    this.closest('div').remove();

    bookIndex--;
}

function readStatusChange() {
    // Select nodelist of the book cards
    const bookCards = document.querySelectorAll(".bookCard");

    // Get an Array version of the nodelist
    const arrayOfBookCards = Array.from(bookCards);

    let cardIndex = arrayOfBookCards.indexOf(this.closest('div'));

    if (myLibrary[cardIndex].read == "Read") {
        myLibrary[cardIndex].read = "Not Read";
    } else if (myLibrary[cardIndex].read == "Not Read") {
        myLibrary[cardIndex].read = "Read";
    }
    this.textContent = myLibrary[cardIndex].read;
    console.log(myLibrary);
}

function checkForExistingBook(title, author, pages) {
    for (let i = 0; i < myLibrary.length; i++) {
        if (title == myLibrary[i].title && author == myLibrary[i].author && pages == myLibrary[i].pages) {
            return true;
        }
    }
}

addBookButton.addEventListener("mousedown", displayLibrary);