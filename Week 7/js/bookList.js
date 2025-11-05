import { addToCart } from './cart.js';

export async function renderBooks() {
  const response = await fetch('../books.json');
  const books = await response.json();

  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  books.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('book-card');

    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" class="book-img">
      <h3><a href="${book.link}" target="_blank">${book.title}</a></h3>
      <p>👨‍💻 Author: ${book.author}</p>
      <p>💰 Price: ₹${book.price}</p>
      <p>📦 ${book.availability}</p>
      <button ${book.availability === "Out of Stock" ? "disabled" : ""}>
        Add to Cart
      </button>
    `;

    card.querySelector('button')?.addEventListener('click', () => {
      addToCart(book);
      alert(`✅ ${book.title} added to cart!`);
    });

    bookList.appendChild(card);
  });
}

