import axios from 'axios';

axios.defaults.baseURL = 'https://642a976db11efeb7599cfede.mockapi.io';

const fetchCards = async () => {
  const response = await axios.get('/users');
  return response.data;
};

export { fetchCards };
