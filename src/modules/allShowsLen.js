const allShowsLen = (response) => {
  const { length } = response;
  const showCountElement = document.querySelector('#shows__count');
  showCountElement.innerText = `Shows(${length})`;
};

export default allShowsLen;