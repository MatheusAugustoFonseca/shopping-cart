const saveCartItems = (item) => {
  // const storage = localStorage;
  localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
