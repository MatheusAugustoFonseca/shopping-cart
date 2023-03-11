// const { fetchItem } = require('./helpers/fetchItem');

// const saveCartItems = require("./helpers/saveCartItems");

const cartItens = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const saveCartList = () => {
  const list = cartItens.innerHTML;
  saveCartItems(list);
};

const cartItemClickListener = (event) => {
  const cartItem = document.querySelector('.cart__item');
  cartItem.remove();
  saveCartList();  
  };

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const idCatch = async (evento) => {
// 2- Ao clicar no botao, pegar o id do produto (SKU); OK
const skuId = evento.target.parentNode.firstChild.innerText;
// 3- Mandar o Id pro fetchItem(retorna um produto); OK
const produto = await fetchItem(skuId);
const { id: sku, title: name, price: salePrice } = produto;
// 4- Mandar o produto para a func createCartItemElement(retorna uma li); OK
const selectedProduct = createCartItemElement({ sku, name, salePrice });
// 5- Pegar o elemento com a classe cartItems; OK
// const cartItens = document.querySelector('.cart__items');
// 6- Colocar a li como filho do elemento buscado; OK
cartItens.appendChild(selectedProduct);
saveCartList();
};

const clickButton = () => {
  // 1- Add evento de click nos botoes de add ao carrinho; OK
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((button) => {
    button.addEventListener('click', idCatch);
  });
};

const clearFunc = () => {
  const clearButton = document.querySelector('.empty-cart');
  clearButton.addEventListener('click', () => {
    cartItens.innerHTML = '';
  });  
};

clearFunc();

const loadingFunc = () => {
  const loadingMsg = document.createElement('span');
  loadingMsg.className = 'loading';
  loadingMsg.innerText = 'carregando...';
  const loadPlace = document.querySelector('.items');
  loadPlace.appendChild(loadingMsg);
};

const removeLoading = () => {
  const remove = document.querySelector('.loading');
  remove.remove();
};

const loadCartList = () => {
  const loadList = getSavedCartItems();
  cartItens.innerHTML = loadList;
  document.querySelectorAll('li.cart__item').forEach((item) => {
    item.addEventListener('click', cartItemClickListener);
  });
};

window.onload = async () => { 
  loadingFunc(); 
  const classItem = document.querySelector('.items');   
  const fetch = await fetchProducts('computador').then(({ results }) => {
    results
    .forEach(({ id: sku, title: name, thumbnail: image }) => {
      const createElement = createProductItemElement({ sku, name, image });
      classItem.appendChild(createElement);      
  });
  clickButton();  
});    
  removeLoading();
  loadCartList();
 };
