import { cart, removeBook, getTotal } from "./cart.js";

export function renderCart(cartData) {
  const cartDiv = document.getElementById("cartItems");
  const totalDiv = document.getElementById("cartTotal");

  cartDiv.innerHTML = "";

  cartData.forEach((book, index) => {
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <span>${book.title} - ₹${book.price}</span>
      <button class="remove-btn" data-idx="${index}">Remove</button>
    `;
    cartDiv.appendChild(item);
  });

  // event listeners
  cartDiv.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-idx");
      removeBook(idx);
      renderCart(cart);
    });
  });

  totalDiv.textContent = `Total: ₹${getTotal()}`;
}