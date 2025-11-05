import { getCart, removeFromCart, calculateTotal } from './cart.js';

function renderCartPage() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  const cart = getCart();

  if (cart.length === 0) {
    cartItems.innerHTML = '<li>Your cart is empty 🛒</li>';
  }

  cart.forEach((book, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${book.title} - ₹${book.price}
      <button>Remove</button>
    `;
    li.querySelector('button').addEventListener('click', () => {
      removeFromCart(index);
      renderCartPage();
    });
    cartItems.appendChild(li);
  });

  document.getElementById('total-price').textContent =
    `Total: ₹${calculateTotal()}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderCartPage();

  document.getElementById('checkout-btn').addEventListener('click', () => {
    alert("✅ Order placed! Thank you for shopping with us!");
  });
});
