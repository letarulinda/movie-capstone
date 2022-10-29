import axios from 'axios';

const sendLikeNum = async (id) => {
  const data = { item_id: id };
  const response = await axios.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BfwiWP6vtovWZEqJsu1F/likes', data);
  return response.data; // Created
};

export default sendLikeNum;