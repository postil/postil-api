import PostilAPI from '../index';

test('listCities', async () => {
  let cities = await PostilAPI.listCities();
  expect(cities).toContainEqual({
    name: 'עין הוד',
    symbol: 74,
    zipcode: '3089000',
  });
  expect(cities).toContainEqual({
    name: 'חיפה',
    symbol: 4000,
    syns: ['קריית חיים'],
  });
});

test('listStreets', async () => {
  let streets = await PostilAPI.listStreets('חיפה');
  expect(streets).toContainEqual({
    name: 'שד אבא חושי',
    symbol: 602,
    houses: 138,
  });
  expect(streets).toContainEqual({
    name: 'שד מוריה',
    symbol: 625,
    houses: 130,
  });
});

test('listStreetsNonExistingCity', async () => {
  await expect(PostilAPI.listStreets('עיר לא קיימת')).rejects.toThrow();
});

test('listHouses', async () => {
  let houses = await PostilAPI.listHouses('חיפה', 'שד מוריה');
  expect(houses).toContainEqual({
    zip: 3457101,
    pos: '32.802721820678,34.9852665634473',
    entries: [
      {
        entry: 'א',
        zip: 3457102,
        pos: '32.802721820678,34.9852665634473',
      },
      {
        entry: 'ב',
        zip: 3457103,
        pos: '32.802721820678,34.9852665634473',
      },
    ],
    n: 1,
  });
});

test('listHousesNonExistingStreet', async () => {
  await expect(PostilAPI.listHouses('חיפה', 'רחוב לא קיים')).rejects.toThrow();
});

test('listHousesNonExistingCity', async () => {
  await expect(PostilAPI.listHouses('עיר לא קיימת', 'שד מוריה')).rejects.toThrow();
});
