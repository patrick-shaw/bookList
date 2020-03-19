const form = document.querySelector('.book-form');

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() { }

UI.prototype.addBookToList = function (book) {
    const bookList = document.getElementById('book-list');

    const row = document.createElement('tr')

    row.innerHTML =
        `<td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a class="delete">X</a></td>`

    bookList.appendChild(row);
}

UI.prototype.clearFields = function () {
    title.value = "";
    author.value = "";
    isbn.value = "";
}

UI.prototype.showAlert = function (message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    const divText = document.createTextNode(message);
    div.appendChild(divText);

    const container = document.querySelector('.container');
    container.insertBefore(div, form);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.deleteBook = function (target) {
    target.parentElement.parentElement.remove();
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Try again', 'error');
    } else {
        ui.addBookToList(book);

        ui.clearFields();

        ui.showAlert('Good job', 'success');
    }
})

document.getElementById('book-list').addEventListener('click', (e) => {
    e.preventDefault();

    const ui = new UI();

    if (e.target.className == 'delete') {
        ui.deleteBook(e.target);
        ui.showAlert('Book deleted', 'success');
    }


})