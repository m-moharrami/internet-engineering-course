let books = [];

const addBook = (ev) => {
    ev.preventDefault();

    let book = {
        name: document.getElementById('bookName').value,
        author: document.getElementById('author').value,
        publishYear: document.getElementById('publishYear').value,
        isbn: document.getElementById('isbn').value,
        price: document.getElementById('price').value
    };

    books.push(book);
    document.forms[0].reset();

    localStorage.setItem('myBookList', JSON.stringify(books));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addBook);
});