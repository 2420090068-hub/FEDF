import { books } from "./data.js";
import { addBook, cart } from "./cart.js";
import { renderCart } from "./ui.js";

export function renderBooks() {
  const list = document.getElementById("bookList");
  list.innerHTML = "";

  books.forEach((book, index) => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <div>
        <strong>${book.title}</strong><br>
        <small>${book.author}</small><br>
        <span>₹${book.price}</span>
      </div>
      <div>
        ${
          book.available
            ? <button class="add-btn" data-idx="${index}">Add</button>
            : <span style="color:red;">Not Available</span>
        }
      </div>
    `;
    list.appendChild(div);
  });

  // event listeners
  list.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-idx");
      addBook(books[idx]);
      renderCart(cart);
    });
  });
}