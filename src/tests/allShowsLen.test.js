/**
 * @jest-environment jsdom
 */

import allShowsLen from '../modules/allShowsLen.js';

describe('api response given through paramter', () => {
  const responseSample = [{}, {}];
  it('checks if DOM is updated by shows count', () => {
    document.body.innerHTML = `<nav>
      <img src="./assets/images/film_logo.jpg" id="logo" alt="logo" />
      <a id="shows__count">Shows()</a>
      <a>Ended Shows</a>
      <a>Running Shows</a>
    </nav>`;

    const showCountElement = document.querySelector('#shows__count');
    allShowsLen(responseSample);
    expect(showCountElement.innerText).toBe(`Shows(${responseSample.length})`);
  });
});