import EventListeners from './eventListeners.js';

const addShowToDom = (show) => {
  const showsContainer = document.querySelector('.movies__container');
  const movieItem = document.createElement('div');
  movieItem.className = 'movie__item';
  const image = document.createElement('img');
  image.src = `${show.image}`;
  image.alt = 'film poster';
  const titleContainer = document.createElement('div');
  titleContainer.classList = 'title__container';
  const movieTitle = document.createElement('div');
  movieTitle.classList = 'movie__title';
  const movieName = document.createElement('p');
  movieName.innerText = `${show.name}`;
  movieName.style.fontWeight = '700';
  const likesContainer = document.createElement('div');
  const like = document.createElement('i');
  like.id = `like-btn-${show.id}`;
  like.classList = 'fa-regular fa-heart';
  like.addEventListener('click', EventListeners.likeClick);
  const likesNum = document.createElement('p');
  likesNum.id = `like-num-${show.id}`;
  likesNum.innerText = `${show.likes} Likes`;
  const commentBtn = document.createElement('button');
  commentBtn.className = 'comment-btn';
  commentBtn.type = 'button';
  commentBtn.id = `comment-btn-${show.id}`;
  commentBtn.innerText = 'Comments';

  movieItem.appendChild(image);
  movieTitle.appendChild(movieName);
  titleContainer.appendChild(movieTitle);
  likesContainer.appendChild(like);
  likesContainer.appendChild(likesNum);
  movieTitle.appendChild(likesContainer);
  titleContainer.appendChild(commentBtn);
  movieItem.appendChild(titleContainer);
  showsContainer.appendChild(movieItem);
};

export default addShowToDom;