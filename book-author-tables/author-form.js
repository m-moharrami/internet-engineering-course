let authors = [];

const addAuthor = (ev) => {
    ev.preventDefault();

    let author = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        books: document.getElementById('books').value,
        birthDate: document.getElementById('birthDate').value
    };

    authors.push(author);
    document.forms[0].reset();

    localStorage.setItem('authorsList', JSON.stringify(authors));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addAuthor);
});