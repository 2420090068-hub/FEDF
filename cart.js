export let cart = [];

// add book
export function addBook(book) {
  cart.push(book);
}

// remove book
export function removeBook(index) {
  cart.splice(index, 1);
}

// calculate total
export function getTotal() {
  return cart.reduce((sum, book) => sum + book.price, 0);
}