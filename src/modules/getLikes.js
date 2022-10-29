import axios from 'axios';

const getLikes = async () => {
  const response = await axios.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BfwiWP6vtovWZEqJsu1F/likes');
  const { data } = response;
  return data;
};

export default getLikes;