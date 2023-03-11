require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('should be a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('fetch is called if argument is computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it('should return same data structure as obj computadorSearch, with computador as argument', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('should receive error msg: You must provide an url, if there are no argument on function', async () => {
    const noArgument = await fetchProducts();
    expect(noArgument).toEqual(new Error('You must provide an url'));
  });
});
