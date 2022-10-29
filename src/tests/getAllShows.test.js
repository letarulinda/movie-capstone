import getAllShows from '../modules/getAllShows.js';

describe('getAllShows.js', () => {
  it('api call should return data', () => {
    getAllShows().then((res) => expect(res.length > 0).toBeTruthy());
  });
});