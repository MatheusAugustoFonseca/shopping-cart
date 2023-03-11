require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('should be a function', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('should return the correct end point, with "MLB1615760527"', async () => {
    await fetchItem("MLB1615760527");
    expect(fetch).toBeCalled();
  });
  it('should return same data structure as obj item, with "MLB1615760527" as argument', async () => {
    expect(await fetchItem("MLB1615760527")).toEqual(item);
  });
  it('should receive error msg: You must provide an url, if there is no argument', async () => {
    const noArgument = await fetchItem();
    expect(noArgument).toEqual(new Error('You must provide an url'));
  });
});
