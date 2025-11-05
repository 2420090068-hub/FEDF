import { getCart, removeFromCart, calculateTotal, formatPrice } from './cart.js';

export function renderCart() {
  const cartDiv = document.getElementById('cart');
  const cart = getCart();
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `
        <p>
          <strong>${item.title}</strong> (${item.quantity}) - ${formatPrice(item.price * item.quantity)}
          <button data-title="${item.title}">Remove</button>
        </p>
      `;
      cartDiv.appendChild(itemDiv);
    });

    // Event listeners for remove buttons
    cartDiv.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(btn.getAttribute('data-title'));
        renderCart();
      });
    });
  }

  // Update total in INR
  document.getElementById('cart-total').textContent = `Total: ${formatPrice(calculateTotal())}`;
}
