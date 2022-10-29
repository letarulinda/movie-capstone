import sendLikeNum from './sendLikeNum.js';

export default class EventListeners {
  static likeClick(e) {
    if (e.target.classList.contains('fa-solid')) {
      e.target.classList.remove('fa-solid');
    } else {
      e.target.classList.add('fa-solid');

      const { id } = e.target;
      const numID = id.split('-')[2];
      const numLikesElement = document.querySelector(`#like-num-${numID}`);
      const numLikes = document.querySelector(`#like-num-${numID}`).innerText.split(' ')[0];
      numLikesElement.innerText = `${Number(numLikes) + 1} Likes`;
      sendLikeNum(numID);
    }
  }
}