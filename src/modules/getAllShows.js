import axios from 'axios';

const getAllShows = async () => {
  const response = await axios.get('https://api.tvmaze.com/shows');
  const { data } = response;
  return data;
};

export default getAllShows;