const commentsCount = document.querySelector('.comments-counter');
const involvmentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BfwiWP6vtovWZEqJsu1F';

const commentsCounter = async (id) => {
  const response = await fetch(`${involvmentApi}/comments?item_id=${id}`);
  const numberOfComments = await response.json();
  const count = numberOfComments.length;

  if (count === undefined) {
    commentsCount.innerHTML = '(0)';
  } else {
    commentsCount.innerHTML = `(${count})`;
  }
  return count;
};

export default commentsCounter;