let cart = [];

// Add book to cart
export function addToCart(book) {
  const existing = cart.find(item => item.title === book.title);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...book, quantity: 1 });
  }
}

// Remove book from cart
export function removeFromCart(title) {
  cart = cart.filter(item => item.title !== title);
}

// Get cart contents
export function getCart() {
  return cart;
}

// Format price in Indian Rupees
export function formatPrice(amount) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
}

// Calculate total price
export function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
