import PostilAPI from '../index';

test('listCities', () => {
  expect(PostilAPI.listCities()).toStrictEqual(["חיפה", "תל אביב"]);
});
