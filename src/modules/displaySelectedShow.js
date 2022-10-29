const commentsDetail = document.querySelector('.comments-detail');

const displaySelectedShow = (movies) => {
  const movieName = movies.name;
  const movieImageUrl = movies.image.original;
  const movieLanguage = movies.language;
  const movieDownload = movies.officialSite;
  const movieRating = movies.rating.average;
  const movieSummary = movies.summary;
  let moviesGenres = '';
  const genreArray = movies.genres;
  genreArray.forEach((element, index) => {
    if (index < genreArray.length - 1) {
      moviesGenres += `${element}, `;
    } else {
      moviesGenres += element;
    }
  });

  const htmlComments = `
          <button class="close-btn"> X </button>
          <div class="pop-container">
              <div class="image-and-download column">
                  <img class="movie-image-pop" src="${movieImageUrl}">
                  <button class="movie-download-btn" type="button">
                      <a class="download-link" href="${movieDownload}" targer="_blank">Stream</a>
                  </button>
              </div>
              <div class="movie-info column">
                  <h2 class ="movie-info-title">${movieName}</h2>
                  <div class="movie-genre">
                      <strong> Genre: </strong>${moviesGenres}
                  </div>
                  <div class="lang-and-rating">
                      <p class="movie-language"><strong>Language: </strong>${movieLanguage}</p>
                      <p class="movie-rating"><strong>Rating: </strong>${movieRating}</p>
                  </div>
                  <div class="summary-div">
                      <strong>Summary: </strong><br>
                      ${movieSummary}
                  </div>
              </div>
          </div>
         `;
  commentsDetail.innerHTML = htmlComments;
};

export default displaySelectedShow;