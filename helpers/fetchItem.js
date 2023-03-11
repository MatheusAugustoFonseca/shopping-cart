const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const promise = await fetch(url)
  .then((Response) => Response.json())
  .then((result) => result)
  .catch(() => (new Error('You must provide an url')));
  return promise;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
