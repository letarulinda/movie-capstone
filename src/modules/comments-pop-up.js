/**
 * @jest-environment jsdom
 */
import axios from 'axios';

const involvmentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BfwiWP6vtovWZEqJsu1F';
const commentsUser = document.querySelector('.comment-user-name');
const commentsContainer = document.querySelector('.comments-list');
const commentContent = document.querySelector('.comments-content');
const moviesApi = 'https://api.tvmaze.com/shows';

export default class PopUpComment {
   static commentPopUp = async (id) => {
     const response = await axios.get(`${moviesApi}/${id}`);
     return response.data;
   };

   static addComments = async (id) => {
     await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BfwiWP6vtovWZEqJsu1F/comments', {
       method: 'POST',
       body: JSON.stringify({
         item_id: `${id}`,
         username: `${commentsUser.value}`,
         comment: `${commentContent.value}`,
       }),
       headers: {
         'Content-Type': 'application/json; charset=UTF-8',
       },
     });
   }

   static getComments = async (id) => {
     commentsContainer.innerHTML = '';
     const response = await fetch(`${involvmentApi}/comments?item_id=${id}`);

     const comments = await response.json();

     let reverseComments;
     const allComments = document.createElement('div');
     allComments.className = 'comment-detail-list';
     allComments.id = `${id}`;
     if (comments.length > 0) {
       reverseComments = comments.reverse();
       reverseComments.forEach((comment) => {
         allComments.innerHTML += `
             <div class="comment-single" id="${id}">
               <div class="comment-date">${comment.creation_date}</div>
               <p class="user-comment"><strong>${comment.username}: </strong>${comment.comment}</p>
             </div>
         `;
         commentsContainer.appendChild(allComments);
       });
     }
   }
}