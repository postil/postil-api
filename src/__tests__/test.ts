import PostilAPI from '../index';

test('listCities', async () => {
  let cities = await PostilAPI.listCities();
  expect(cities).toStrictEqual(["חיפה", "תל אביב"]);
});
