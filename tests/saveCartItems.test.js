const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('should call localStorage.setItem with <ol><li>Item</li></ol> argument', () => {
    expect(saveCartItems()).toBeCalled();
  });
  // it('should call localStorage.setItem after the following params, cartItems and the value used at saveCartItems', () => {
  //   expect(localStorage()).toBeCalled();
  // })
});
