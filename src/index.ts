export class PostilAPI {
  listCities() {
    const promise = new Promise<string[]>((resolve, reject) => {
      resolve(['חיפה', 'תל אביב']);
    });
    return promise;
  };
}

export default new PostilAPI();
