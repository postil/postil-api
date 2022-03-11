import axios from 'axios';

export interface City {
  name: string;
  zipcode: string;
  symbol: number;
  syns: string[];
}

export interface Street {
  name: string;
  symbol: number;
  houses: number;
}

const baseUrl = `https://raw.githubusercontent.com/postil/data/main`;

export class PostilAPI {
  listCities() {
    const url = `${baseUrl}/cities.json`;

    const promise = new Promise<City[]>((resolve, reject) => {
      axios
        .get(url)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  listStreets(city: string) {
    const url = `${baseUrl}/${encodeURIComponent(city)}/streets.json`;

    const promise = new Promise<Street[]>((resolve, reject) => {
      axios
        .get(url)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }

  listHouses(city: string, street: string) {
    const url = `${baseUrl}/${encodeURIComponent(city)}/${encodeURIComponent(street)}.json`;

    const promise = new Promise<Street[]>((resolve, reject) => {
      axios
        .get(url)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((error) => {
          reject(error);
        });
    });

    return promise;
  }
}

export default new PostilAPI();
