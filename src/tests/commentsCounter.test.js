/**
 * @jest-environment jsdom
 */
const involvmentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BfwiWP6vtovWZEqJsu1F';
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([
    {
      comment: 'Movie time',
      creation_date: '2022-2-7',
      username: 'Tonny',
    },
    {
      comment: 'Movie!',
      creation_date: '2022-10-12',
      username: 'Muchui',
    },
  ]),
}));
const commentsCounter = async (id) => {
  const response = await fetch(`${involvmentApi}/comments?item_id=${id}`);
  const numberOfComments = await response.json();
  const count = numberOfComments.length;
  const commentsCount = document.querySelector('.comments-counter');
  commentsCount.innerHTML = `(${count})`;
  return count;
};
describe('Tests the comment count', () => {
  test('should test the number of comments', async () => {
    document.body.innerHTML = '<span class="comments-counter"></span>';
    const count = document.querySelector('.comments-counter');
    await commentsCounter(1);
    expect(count.innerHTML).toEqual('(2)');
  });
});