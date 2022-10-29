import './style.css';
import PopUpComment from './modules/comments-pop-up.js';
import allShowsLen from './modules/allShowsLen.js';
import getAllShows from './modules/getAllShows.js';
import addShowToDom from './modules/addShowToDom.js';
import getLikes from './modules/getLikes.js';
import displaySelectedShow from './modules/displaySelectedShow.js';
import commentsCounter from './modules/commentCounter.js';

const homepage = document.querySelector('.movies__container');
const commentBtn = document.querySelector('.comment-submit-btn');
const commentsUser = document.querySelector('.comment-user-name');
const commentContent = document.querySelector('.comments-content');
const commentFail = document.querySelector('.comment-failure');
const commentSection = document.querySelector('.comments-section');
let selectedComment = null;

getAllShows().then(async (res) => {
  allShowsLen(res);
  const combineData = [];
  await res.forEach((val) => {
    combineData.push({
      name: val.name,
      id: val.id,
      image: val.image.medium,
      likes: 0,
    });
  });
  await getLikes().then(async (res) => {
    await res.forEach((like) => {
      combineData.forEach((data) => {
        if (Number(like.item_id) === data.id) data.likes = like.likes;
      });
    });
  });
  combineData.forEach((val) => addShowToDom(val));
});

homepage.addEventListener('click', async (event) => {
  if (event.target.className === 'comment-btn') {
    const commentId = event.target.id;
    const popUpId = event.target.id.split('-')[2];
    selectedComment = commentId;
    commentSection.style.display = 'block';
    homepage.classList.add('active');
    PopUpComment.commentPopUp(popUpId).then(async (movies) => {
      displaySelectedShow(movies);
      await PopUpComment.getComments(commentId);
      await commentsCounter(commentId);
    });
  }
});

commentSection.addEventListener('click', async (event) => {
  if (event.target.className === 'close-btn') {
    commentSection.style.display = 'none';
  }
});

commentBtn.addEventListener('click', async (event) => {
  const allComments = event.target.parentElement.parentElement.previousElementSibling;
  const singleComment = allComments.querySelector('.comment-single');
  if (commentsUser.value !== '' && commentContent.value !== '') {
    let idMovie = null;
    if (singleComment === null) {
      idMovie = selectedComment;
    } else {
      idMovie = singleComment.id;
    }
    await PopUpComment.addComments(idMovie);
    await PopUpComment.getComments(idMovie);
    await commentsCounter(idMovie);
    commentsUser.value = '';
    commentContent.value = '';
  } else {
    commentFail.innerHTML = 'Invalid user input';
  }
});